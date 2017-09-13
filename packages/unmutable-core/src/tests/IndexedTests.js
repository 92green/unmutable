// @flow
import {fromJS, List, is} from 'immutable';
import CollectionTestDefinitions from './CollectionTestDefinitions';

export default function(test: Function, Wrap: Function, indexedTests: Array<Object>) {
    test('Wrapped Lists have a size', (tt: *) => {
        var list: List<*> = fromJS(sampleArray);
        tt.is(Wrap(list).size, list.size, 'size returns correct size');
    });

    var sampleArray: Array<*> = [
        70,
        2,
        [0, 1]
    ];

    var sampleArray2: Array<*> = [
        4,
        5
    ];

    var arrayListTestConfig: Object = {
        only: indexedTests,
        item: sampleArray,
        itemAlternative: sampleArray2,
        sampleValue: 789,
        existingValue: 2,
        nonExistingValue: 555,
        key: 1,
        keyPath: [2,1],
        nonExistingKey: 3,
        partiallyExistingKeyPath: [2,10],
        nonExistingKeyPath: [100, 200],
        negativeKey: -3,
        nonExistingNegativeKey: -4
    };

    CollectionTestDefinitions(arrayListTestConfig)
        .forEach(({desc, method, args}: Object) => {
            test(`"List.${method}" should ${desc}. Args: ${JSON.stringify(args)}`, (tt: *) => {
                var map: Map<string,*> = fromJS(sampleArray);
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

    test('Arrays have a size', (tt: *) => {
        tt.is(Wrap(sampleArray).size, List(sampleArray).size, 'size returns correct size');
    });

    CollectionTestDefinitions(arrayListTestConfig)
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
                deep = false // true if we're testing a deep method
            } = testConfig;

            test(`"Array.${method}" should ${desc}. Args: ${JSON.stringify(args)}`, (tt: *) => {

                var collection = deep ? fromJS(item) : List(item);

                // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
                var listResult = collection[method](...args);

                if(returnType === "self") {
                    listResult = deep ? listResult.toJS() : listResult.toArray();
                }


                var unmutableMethod = Wrap(item)[method];
                if(!unmutableMethod) {
                    throw new Error(`${Wrap(item).wrapperType()}.${method}" does not exist`);
                }

                var unmutableLiteResult = unmutableMethod(...args);

                if(returnType !== "plain") {
                    unmutableLiteResult = unmutableLiteResult.done();
                }

                tt.deepEqual(listResult, unmutableLiteResult);
            });
        });


}
