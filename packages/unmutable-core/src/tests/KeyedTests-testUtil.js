// @flow
import {fromJS, Map} from 'immutable';
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

    //
    // Map tests
    //

    test('Wrapped Maps have a size', (tt: *) => {
        var map: Map<string,*> = fromJS(sampleObject);
        tt.is(Wrap(map).size, map.size, 'size returns correct size');
    });

    CollectionTestDefinitions({
        existingValue: 123,
        item: fromJS(sampleObject),
        itemAlternative: fromJS(sampleObject2),
        itemAtKey: sampleObject.a,
        key: 'a',
        keyPath: ['b', 'x'],
        nonExistingKey: 'z',
        nonExistingKeyPath: ['z', 'zz'],
        nonExistingValue: 555,
        only: keyedTests,
        partiallyExistingKeyPath: ['b', 'z'],
        sampleValue: 789
    })
        .forEach((testConfig: Object) => {
            var {
                args,
                callbackTests = 0,
                desc,
                item,
                method,
                returnType
            } = testConfig;

            test(`"Map.${method}" should ${desc}. Args: ${JSON.stringify(args())}`, (tt: *) => {
                tt.plan(1 + callbackTests);
                // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
                var immutableResult = item[method](...args());
                var unmutableMethod = Wrap(item)[method];
                if(!unmutableMethod) {
                    throw new Error(`${Wrap(item).wrapperType()}.${method}" does not exist`);
                }

                var unmutableResult = unmutableMethod(...args(tt));
                if(returnType !== "plain") {
                    unmutableResult = unmutableResult.value;
                }

                tt.deepEqual(immutableResult, unmutableResult);
            });
        });

    //
    // Object tests
    //

    test('Objects have a size', (tt: *) => {
        tt.is(Wrap(sampleObject).size, Map(sampleObject).size, 'size returns correct size');
    });

    CollectionTestDefinitions({
        existingValue: 123,
        item: sampleObject,
        itemAlternative: sampleObject2,
        itemAtKey: sampleObject.a,
        key: 'a',
        keyPath: ['b', 'x'],
        nonExistingKey: 'z',
        nonExistingKeyPath: ['z', 'zz'],
        nonExistingValue: 555,
        only: keyedTests,
        partiallyExistingKeyPath: ['b', 'z'],
        sampleValue: 789
    })
        .forEach((testConfig: Object) => {
            var {
                args,
                callbackTests = 0,
                deep = false,
                desc,
                item,
                method,
                returnType,
                shouldBeImmutable = true,
                shouldReturnSelf = false
            } = testConfig;

            // returnType: "self" if the thing being returned is a modified version of the original thing
            // returnType: "wrapped" if the thing being returned is to be in an unmutable-lite wrapper
            // returnType: "plain" if the thing being returned is just the value (for 'status' methods like .has())

            test(`"Object.${method}" should ${desc}. Args: ${JSON.stringify(args())}`, (tt: *) => {

                let testForImmutability = !shouldReturnSelf && returnType === "self" && shouldBeImmutable;
                tt.plan(1 + callbackTests + (testForImmutability ? 1 : 0));

                var collection = deep ? fromJS(item) : Map(item);

                // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
                var mapResult = collection[method](...args());

                if(returnType === "self") {
                    mapResult = deep ? mapResult.toJS() : mapResult.toObject();
                }

                var unmutableMethod = Wrap(item)[method];
                if(!unmutableMethod) {
                    throw new Error(`${Wrap(item).wrapperType()}.${method}" does not exist`);
                }
                var unmutableResult = unmutableMethod(...args(tt));

                if(returnType !== "plain") {
                    unmutableResult = unmutableResult.value;
                }

                tt.deepEqual(mapResult, unmutableResult, "Result shoud be correct");
                if(testForImmutability && shouldBeImmutable) {
                    tt.not(item, unmutableResult, "Method should be immutable");
                }
            });
        });
}
