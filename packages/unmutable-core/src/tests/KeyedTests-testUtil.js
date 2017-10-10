// @flow
import {fromJS, Map} from 'immutable';
import CollectionTestDefinitions from './CollectionTestDefinitions-testUtil';

export default function(test: Function, Wrap: Function, keyedTests: Array<Object>, libraryName: string) {

    var sampleObject: Object = {
        a: 123,
        b: {
            x: 456,
            y: 321
        },
        c: 789
    };

    var sampleObject2: Object = {
        a: 1000,
        b: {
            y: 123123
        }
    };

    var testDefinitions: Object = {
        existingValue: 123,
        itemAtKey: sampleObject.a,
        itemAtKeyPath: sampleObject.b.x,
        key: 'a',
        keyPath: ['b', 'x'],
        libraryName,
        nonExistingKey: 'z',
        nonExistingKeyPath: ['z', 'zz'],
        nonExistingValue: 555,
        only: keyedTests,
        partiallyExistingKeyPath: ['b', 'z'],
        sampleValue: 789
    };

    //
    // Map tests
    //

    test('Wrapped Maps have a size', (tt: *) => {
        var map: Map<string,*> = fromJS(sampleObject);
        tt.is(Wrap(map).size, map.size, 'size returns correct size');
    });

    test('Wrapped Maps have a keyArray method', (tt: *) => {
        var map: Map<string,*> = fromJS(sampleObject);
        tt.deepEqual(Wrap(map).keyArray().value, ['a','b','c'], 'keyArray returns correct array of keys');
    });

    test('Wrapped Maps return true if empty', (tt: *) => {
        tt.true(Wrap(Map()).isEmpty());
    });

    test('Wrapped Maps return false if not empty', (tt: *) => {
        tt.false(Wrap(fromJS(sampleObject)).isEmpty());
    });

    CollectionTestDefinitions({
        ...testDefinitions,
        item: fromJS(sampleObject),
        itemAlternative: fromJS(sampleObject2)
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

    test('Wrapped Objects have a keyArray method', (tt: *) => {
        tt.deepEqual(Wrap(sampleObject).keyArray().value, ['a','b','c'], 'keyArray returns correct array of keys');
    });

    test('Wrapped Objects return true if empty', (tt: *) => {
        tt.true(Wrap({}).isEmpty());
    });

    test('Wrapped Objects return false if not empty', (tt: *) => {
        tt.false(Wrap(sampleObject).isEmpty());
    });

    CollectionTestDefinitions({
        ...testDefinitions,
        item: sampleObject,
        itemAlternative: sampleObject2
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

                tt.deepEqual(mapResult, unmutableResult, "Result should be correct");
                if(testForImmutability && shouldBeImmutable) {
                    tt.not(item, unmutableResult, "Method should be immutable");
                }
            });
        });
}
