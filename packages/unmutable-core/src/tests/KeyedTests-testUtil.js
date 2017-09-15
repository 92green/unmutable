// @flow
import {fromJS, Map, is} from 'immutable';
import CollectionTestDefinitions from './CollectionTestDefinitions-testUtil';

var sampleObject: Object = {
    a: 123,
    b: {
        x: 456,
        y: 321
    },
    c: 789
};

var sampleObject2: Object = {
    c: 1000,
    b: {
        y: 123123
    }
};

export default function(test: Function, Wrap: Function, keyedTests: Array<Object>) {

    test('Wrapped Maps have a size', (tt: *) => {
        var map: Map<string,*> = fromJS(sampleObject);
        tt.is(Wrap(map).size, map.size, 'size returns correct size');
    });

    var objectMapTestConfig: Object = {
        only: keyedTests,
        item: sampleObject,
        itemAlternative: sampleObject2,
        sampleValue: 789,
        existingValue: 123,
        nonExistingValue: 555,
        key: 'a',
        keyPath: ['b', 'x'],
        nonExistingKey: 'z',
        partiallyExistingKeyPath: ['b', 'z'],
        nonExistingKeyPath: ['z', 'zz']
    };

    CollectionTestDefinitions(objectMapTestConfig)
        .forEach(({desc, method, args}: Object) => {
            test(`"Map.${method}" should ${desc}. Args: ${JSON.stringify(args)}`, (tt: *) => {
                var map: Map<string,*> = fromJS(sampleObject);
                // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
                var immutableResult = map[method](...args);
                var unmutableMethod = Wrap(map)[method];
                if(!unmutableMethod) {
                    throw new Error(`${Wrap(map).wrapperType()}.${method}" does not exist`);
                }
                var unmutableResult = unmutableMethod(...args).done();
                tt.true(is(unmutableResult, immutableResult));
            });
        });

    test('Objects have a size', (tt: *) => {
        tt.is(Wrap(sampleObject).size, Map(sampleObject).size, 'size returns correct size');
    });

    CollectionTestDefinitions(objectMapTestConfig)
        .forEach((testConfig: Object) => {
            var {
                item,
                desc,
                method,
                args,
                returnType,
                // "self" if the thing being returned is a modified version of the original thing
                // "wrapped" if the thing being returned is to be in an unmutable-lite wrapper
                // "plain" if the thing being returned is just the value (for 'status' methods like .has())
                deep = false, // true if we're testing a deep method,
                shouldReturnSelf = false
            } = testConfig;

            test(`"Object.${method}" should ${desc}. Args: ${JSON.stringify(args)}`, (tt: *) => {

                var collection = deep ? fromJS(item) : Map(item);

                // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
                var mapResult = collection[method](...args);

                if(returnType === "self") {
                    mapResult = deep ? mapResult.toJS() : mapResult.toObject();
                }

                var unmutableMethod = Wrap(item)[method];
                if(!unmutableMethod) {
                    throw new Error(`${Wrap(item).wrapperType()}.${method}" does not exist`);
                }
                var unmutableLiteResult = unmutableMethod(...args);

                if(returnType !== "plain") {
                    unmutableLiteResult = unmutableLiteResult.done();
                }

                tt.deepEqual(mapResult, unmutableLiteResult, "Result shoud be correct");
                if(!shouldReturnSelf && typeof mapResult !== "undefined" && returnType === "self") {
                    tt.not(item, unmutableLiteResult, "Method should be immutable");
                }
            });
        });
}
