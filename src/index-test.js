// @flow
import test from 'ava';
import {fromJS, Map, List, is} from 'immutable';
import {Wrap} from './index';

var types: Array<Object> = [
    {
        value: undefined,
        name: "undefined",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: null,
        name: "null",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: "string",
        name: "string",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: 123,
        name: "number",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: 0,
        name: "zero number",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: true,
        name: "true boolean",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: false,
        name: "false boolean",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: () => {},
        name: "function",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: {
            a: 1,
            b: 2
        },
        name: "object",
        shouldBeCollection: true,
        shouldBeKeyed: true,
        shouldBeIndexed: false
    },
    {
        value: [1,2,3],
        name: "array",
        shouldBeCollection: true,
        shouldBeKeyed: false,
        shouldBeIndexed: true
    },
    {
        value: Map({
            a: 1,
            b: 2
        }),
        name: "immutable map",
        shouldBeCollection: true,
        shouldBeKeyed: true,
        shouldBeIndexed: false
    },
    {
        value: List([1,2,3]),
        name: "immutable list",
        shouldBeCollection: true,
        shouldBeKeyed: false,
        shouldBeIndexed: true
    }
];


test('all types should be able to be wrapped and unwrapped', (tt: *) => {
    types.forEach(({value, name}: Object) => {
        tt.deepEqual(Wrap(value).done(), value, `${name} should be able to be wrapped and unwrapped`);
    });
});

test('all types should return correct values for isCollection()', (tt: *) => {
    types.forEach(({value, shouldBeCollection, name}: Object) => {
        tt.is(Wrap(value).isCollection(), shouldBeCollection, `${name} ${shouldBeCollection ? "should" : "should not"} be collection`);
    });
});

test('all types should return correct values for isKeyed()', (tt: *) => {
    types.forEach(({value, shouldBeKeyed, name}: Object) => {
        tt.is(Wrap(value).isKeyed(), shouldBeKeyed, `${name} ${shouldBeKeyed ? "should" : "should not"} be keyed`);
    });
});

test('all types should return correct values for isIndexed()', (tt: *) => {
    types.forEach(({value, shouldBeIndexed, name}: Object) => {
        tt.is(Wrap(value).isIndexed(), shouldBeIndexed, `${name} ${shouldBeIndexed ? "should" : "should not"} be indexed`);
    });
});

var tests: Function = (config: Object): Array<Object> => {
    const {
        only,
        sampleValue,
        existingValue,
        nonExistingValue,
        item,
        itemToMerge,
        key,
        keyPath,
        nonExistingKey,
        partiallyExistingKeyPath,
        nonExistingKeyPath
    } = config;

    const emptyKeyPath = [];

    var tests = [
        {
            desc: "clear",
            method: "clear",
            args: [],
            returnType: "self"
        },
        {
            desc: "concat",
            method: "concat",
            args: [itemToMerge],
            returnType: "self"
        },
        {
            desc: "delete key",
            method: "delete",
            args: [key],
            returnType: "self"
        },
        {
            desc: "delete non-existing key",
            method: "delete",
            args: [nonExistingKey],
            returnType: "self"
        },
        {
            desc: "deleteIn keyPath",
            method: "deleteIn",
            args: [keyPath],
            returnType: "self",
            deep: true
        },
        {
            desc: "deleteIn non-existing keyPath",
            method: "deleteIn",
            args: [nonExistingKeyPath],
            returnType: "self",
            deep: true
        },
        {
            desc: "deleteIn empty keyPath",
            method: "deleteIn",
            args: [emptyKeyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "return false if a key returns false",
            method: "every",
            args: [ii => ii === nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "return true only if all keys return true",
            method: "every",
            args: [ii => ii !== nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "can get first value",
            method: "first",
            args: [],
            returnType: "wrapped"
        },
        {
            desc: "get existing key",
            method: "get",
            args: [key],
            returnType: "wrapped"
        },
        {
            desc: "get key with default value",
            method: "get",
            args: [key, sampleValue],
            returnType: "wrapped"
        },
        {
            desc: "get non-existing key",
            method: "get",
            args: [nonExistingKey],
            returnType: "wrapped"
        },
        {
            desc: "get non-existing key with default value",
            method: "get",
            args: [nonExistingKey, sampleValue],
            returnType: "wrapped"
        },
        {
            desc: "getIn keyPath",
            method: "getIn",
            args: [keyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn keyPath with default value",
            method: "getIn",
            args: [keyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn non-existing keyPath",
            method: "getIn",
            args: [nonExistingKeyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn non-existing keyPath with default value",
            method: "getIn",
            args: [nonExistingKeyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn partially non-existing keyPath",
            method: "getIn",
            args: [partiallyExistingKeyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn partially non-existing keyPath with default value",
            method: "getIn",
            args: [partiallyExistingKeyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn empty keyPath",
            method: "getIn",
            args: [emptyKeyPath],
            returnType: "self",
            deep: true
        },
        {
            desc: "has key",
            method: "has",
            args: [key],
            returnType: "plain"
        },
        {
            desc: "has non-existing key",
            method: "has",
            args: [nonExistingKey],
            returnType: "plain"
        },
        {
            desc: "hasIn keyPath",
            method: "hasIn",
            args: [keyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "hasIn partially non-existing keyPath",
            method: "hasIn",
            args: [partiallyExistingKeyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "hasIn non-existing keyPath",
            method: "hasIn",
            args: [nonExistingKeyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "hasIn empty keyPath",
            method: "hasIn",
            args: [emptyKeyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "includes existing value",
            method: "includes",
            args: [existingValue],
            returnType: "plain"
        },
        {
            desc: "includes non-existing value",
            method: "includes",
            args: [nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "can get last value",
            method: "last",
            args: [],
            returnType: "wrapped"
        },
        {
            desc: "map",
            method: "map",
            args: [ii => `${ii}!`],
            returnType: "self"
        },
        {
            desc: "mapEntries",
            method: "mapEntries",
            args: [([key, value]) => [key, `${value}!`]],
            returnType: "self"
        },
        {
            desc: "mapKeys",
            method: "mapKeys",
            args: [ii => `${ii}!`],
            returnType: "self"
        },
        {
            desc: "merge",
            method: "merge",
            args: [itemToMerge],
            returnType: "self"
        },
        // {
        //     desc: "mergeDeep",
        //     method: "mergeDeep",
        //     args: [itemToMerge]
        // },
        // {
        //     desc: "mergeDeepWith",
        //     method: "mergeDeepWith",
        //     args: [(oldVal, newVal) => oldVal / newVal, itemToMerge]
        // },
                // {
        //     desc: "mergeIn",
        //     method: "mergeIn",
        //     args: [['b', 'x'], itemToMerge]
        // },
        // {
        //     desc: "mergeDeepIn",
        //     method: "mergeDeepIn",
        //     args: [['b', 'x'], itemToMerge]
        // },
        {
            desc: "mergeWith",
            method: "mergeWith",
            args: [(oldVal, newVal) => oldVal / newVal, itemToMerge],
            returnType: "self"
        },
        {
            desc: "set key",
            method: "set",
            args: [key, sampleValue],
            returnType: "self"
        },
        {
            desc: "set non-existing key",
            method: "set",
            args: [nonExistingKey, sampleValue],
            returnType: "self"
        },
        {
            desc: "setIn keyPath",
            method: "setIn",
            args: [keyPath, sampleValue],
            returnType: "self",
            deep: true
        },
        {
            desc: "setIn partially non-existing keyPath",
            method: "setIn",
            args: [keyPath, sampleValue],
            returnType: "self",
            deep: true
        },
        {
            desc: "setIn non-existing keyPath",
            method: "setIn",
            args: [nonExistingKeyPath, sampleValue],
            returnType: "self",
            deep: true
        },
        {
            desc: "setIn empty keyPath",
            method: "setIn",
            args: [emptyKeyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "return true if a key returns true",
            method: "some",
            args: [ii => ii === existingValue],
            returnType: "plain"
        },
        {
            desc: "return false only if no keys return true",
            method: "some",
            args: [ii => ii === nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "update whole collection",
            method: "update",
            args: [ii => ii.set(key, existingValue)],
            returnType: "self"
        },
        {
            desc: "update key",
            method: "update",
            args: [key, ii => ii + 100],
            returnType: "self"
        },
        {
            desc: "update non-existing key",
            method: "update",
            args: [nonExistingKey, sampleValue, ii => ii],
            returnType: "self"
        },
        {
            desc: "updateIn keyPath",
            method: "updateIn",
            args: [keyPath, ii => ii + 100],
            returnType: "self",
            deep: true
        },
        {
            desc: "updateIn non-existing keyPath",
            method: "updateIn",
            args: [nonExistingKeyPath, ii => ii],
            returnType: "self",
            deep: true
        },
        {
            desc: "updateIn non-existing keyPath with notSetValue",
            method: "updateIn",
            args: [nonExistingKeyPath, sampleValue, ii => ii],
            returnType: "self",
            deep: true
        },
        {
            desc: "updateIn partially existing keyPath",
            method: "updateIn",
            args: [partiallyExistingKeyPath, sampleValue, ii => ii],
            returnType: "self",
            deep: true
        },
        {
            desc: "updateIn empty keyPath",
            method: "updateIn",
            args: [emptyKeyPath, ii => ii],
            returnType: "self",
            deep: true
        }

        // flatMap
        // filter
        // filterNot
        // reverse
        // sort
        // sortBy
        // groupBy
    ];

    if(only) {
        tests = tests.filter(ii => only.indexOf(ii.method) !== -1);
    }

    return tests.map(ii => ({...ii, item}));
};

var mapTestNames: Array<string> = [
    //asImmutable
    //asMutable
    //butLast
    "clear",
    "concat",
    //count
    //countBy
    "delete",
    //deleteAll,
    "deleteIn",
    //entries
    //entrySeq
    //equals
    "every",
    //filter,
    //filterNot,
    //find
    //findEntry
    //findKey
    //findLast
    //findLastEntry
    //findLastKey
    "first",
    //flatMap,
    //flatten
    //flip
    //forEach
    "get",
    "getIn",
    //groupBy
    "has",
    "hasIn",
    //hashCode
    "hasIn",
    "includes",
    //isEmpty
    //isSubset
    //isSuperset
    //join
    //keyOf
    //keys
    //keySeq
    "last",
    //lastKeyOf
    "map",
    "mapEntries",
    "mapKeys",
    //max
    //maxBy
    "merge",
    //mergeDeep
    //mergeDeepIn
    //mergeDeepWith
    //mergeIn
    "mergeWith",
    //min
    //minBy
    //reduce
    //reduceRight
    //rest
    //reverse,
    "set",
    "setIn",
    //skip
    //skipLast
    //skipUntil
    //skipWhile
    //slice
    "some",
    //sort,
    //sortBy,
    //take
    //takeLast
    //takeUntil
    //takeWhile
    //toArray
    //toIndexedSeq
    //toJS
    //toJSON
    //toKeyedSeq
    //toList
    //toMap
    //toObject
    //toOrderedMap
    //toOrderedSet
    //toSeq
    //toSet
    //toSetSeq
    //toStack
    "update",
    "updateIn"
    //values
    //valueSeq
    //withMutations
];

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

test('Wrapped Maps have a size', (tt: *) => {
    var map: Map<string,*> = fromJS(sampleObject);
    tt.is(Wrap(map).size, map.size, 'size returns correct size');
});

var objectMapTestConfig: Object = {
    only: mapTestNames,
    item: sampleObject,
    itemToMerge: sampleObject2,
    sampleValue: 789,
    existingValue: 123,
    nonExistingValue: 555,
    key: 'a',
    keyPath: ['b', 'x'],
    nonExistingKey: ['z'],
    partiallyExistingKeyPath: ['b', 'z'],
    nonExistingKeyPath: ['z', 'zz']
};

tests({
    ...objectMapTestConfig
})
    .forEach(({desc, method, args}: Object) => {
        test(`"Map.${method}" should ${desc}. Args: ${JSON.stringify(args)}`, (tt: *) => {
            var map: Map<string,*> = fromJS(sampleObject);
            tt.true(
                is(
                    Wrap(map)[method](...args).done(),
                    // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
                    map[method](...args)
                )
            );
        });
    });

test('Objects have a size', (tt: *) => {
    tt.is(Wrap(sampleObject).size, Map(sampleObject).size, 'size returns correct size');
});

tests({
    ...objectMapTestConfig
})
    .forEach((testConfig: Object) => {
        var {
            item,
            desc,
            method,
            args,
            returnType,
            // "self" if the thing being returned is a modified version of the original thing
            // "wrapped" if the thing being returned is to be in an unmutable wrapper
            // "plain" if the thing being returned is just the value (for 'status' methods like .has())
            deep = false // true if we're testing a deep method
        } = testConfig;

        test(`"Object.${method}" should ${desc}. Args: ${JSON.stringify(args)}`, (tt: *) => {

            var collection = deep ? fromJS(item) : Map(item);

            // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
            var mapResult = collection[method](...args);

            if(returnType === "self") {
                mapResult = deep ? mapResult.toJS() : mapResult.toObject();
            }

            var unmutableResult = Wrap(item)[method](...args);

            if(returnType !== "plain") {
                unmutableResult = unmutableResult.done();
            }

            tt.deepEqual(mapResult, unmutableResult);
        });
    });


var listTestNames: Array<string> = [
    //asImmutable
    //asMutable
    //butLast
    "clear",
    "concat",
    //count
    //countBy
    "delete",
    "deleteIn",
    //entries
    //entrySeq
    //equals
    "every",
    //filter,
    //filterNot,
    //find
    //findEntry
    //findIndex
    //findKey
    //findLast
    //findLastEntry
    //findLastIndex
    //findLastKey
    "first",
    //flatMap,
    //flatten
    //forEach
    //fromEntrySeq
    "get",
    "getIn",
    //groupBy
    "has",
    //hashCode
    "hasIn",
    "includes",
    //indexOf
    //insert
    //interleave
    //interpose
    //isEmpty
    //isSubset
    //isSuperset
    //join
    //keyOf
    //keys
    //keySeq
    "last",
    //lastIndexOf
    //lastKeyOf
    "map",
    //max
    //maxBy
    "merge",
    //mergeDeep
    //mergeDeepIn
    //mergeDeepWith
    //mergeIn
    "mergeWith",
    //min
    //minBy
    //pop
    //push
    //reduce
    //reduceRight
    //rest
    //reverse,
    "set",
    "setIn",
    //setSize
    //shift
    //skip
    //skipLast
    //skipUntil
    //skipWhile
    //slice
    "some",
    //sort,
    //sortBy,
    //splice
    //take
    //takeLast
    //takeUntil
    //takeWhile
    //toArray
    //toIndexedSeq
    //toJS
    //toJSON
    //toKeyedSeq
    //toList
    //toMap
    //toObject
    //toOrderedMap
    //toOrderedSet
    //toSeq
    //toSet
    //toSetSeq
    //toStack
    //unshift
    "update",
    "updateIn"
    //values
    //valueSeq
    //withMutations
    //zip
    //zipWith
];

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
    only: listTestNames,
    item: sampleArray,
    itemToMerge: sampleArray2,
    sampleValue: 789,
    existingValue: 2,
    nonExistingValue: 555,
    key: 1,
    keyPath: [2,1],
    nonExistingKey: [3],
    partiallyExistingKeyPath: [2,10],
    nonExistingKeyPath: [100, 200]
};

tests({
    ...arrayListTestConfig
})
    .forEach(({desc, method, args}: Object) => {
        test(`"List.${method}" should ${desc}. Args: ${JSON.stringify(args)}`, (tt: *) => {
            var list: List<*> = fromJS(sampleArray);
            tt.true(
                is(
                    Wrap(list)[method](...args).done(),
                    // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
                    list[method](...args)
                )
            );
        });
    });

test('Arrays have a size', (tt: *) => {
    tt.is(Wrap(sampleArray).size, List(sampleArray).size, 'size returns correct size');
});

tests({
    ...arrayListTestConfig
})
    .forEach((testConfig: Object) => {
        var {
            item,
            desc,
            method,
            args,
            returnType,
            // "self" if the thing being returned is a modified version of the original thing
            // "wrapped" if the thing being returned is to be in an unmutable wrapper
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

            var unmutableResult = Wrap(item)[method](...args);

            if(returnType !== "plain") {
                unmutableResult = unmutableResult.done();
            }

            tt.deepEqual(listResult, unmutableResult);
        });
    });
