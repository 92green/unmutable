// @flow
import test from 'ava';
import {fromJS, Map, List, is} from 'immutable';
import {Wrap} from './index';

var types: Array<Object> = [
    {
        value: undefined,
        name: "undefined",
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: null,
        name: "null",
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: "string",
        name: "string",
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: 123,
        name: "number",
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: 0,
        name: "zero number",
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: true,
        name: "true boolean",
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: false,
        name: "false boolean",
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: () => {},
        name: "function",
        shouldBeKeyed: false,
        shouldBeIndexed: false
    },
    {
        value: {
            a: 1,
            b: 2
        },
        name: "object",
        shouldBeKeyed: true,
        shouldBeIndexed: false
    },
    {
        value: [1,2,3],
        name: "array",
        shouldBeKeyed: false,
        shouldBeIndexed: true
    },
    {
        value: Map({
            a: 1,
            b: 2
        }),
        name: "immutable map",
        shouldBeKeyed: true,
        shouldBeIndexed: false
    },
    {
        value: List([1,2,3]),
        name: "immutable list",
        shouldBeKeyed: false,
        shouldBeIndexed: true
    }
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

var sampleArray: Array<*> = [
    "one",
    2,
    "THREE"
];

var sampleArray2: Array<*> = [
    4,
    5
];

var mapTests: Function = (config: Object): Array<Object> => {
    const {thingToMerge, only} = config;

    var tests = [
        {
            desc: "set non existent key",
            method: "set",
            args: ['d', 789],
            returnType: "self"
        },
        {
            desc: "set existing key",
            method: "set",
            args: ['a', 789],
            returnType: "self"
        },
        {
            desc: "delete non existent key",
            method: "delete",
            args: ['d'],
            returnType: "self"
        },
        {
            desc: "delete existing key",
            method: "delete",
            args: ['a'],
            returnType: "self"
        },
        {
            desc: "clear",
            method: "clear",
            args: [],
            returnType: "self"
        },
        {
            desc: "update whole collection",
            method: "update",
            args: [ii => ii.set('a', 'a')],
            returnType: "self"
        },
        {
            desc: "update key",
            method: "update",
            args: ['a', ii => ii + 100],
            returnType: "self"
        },
        {
            desc: "update nonexistent key",
            method: "update",
            args: ['z', 500, ii => ii],
            returnType: "self"
        },
        {
            desc: "merge",
            method: "merge",
            args: [thingToMerge],
            returnType: "self"
        },
        {
            desc: "mergeWith",
            method: "mergeWith",
            args: [(oldVal, newVal) => oldVal / newVal, thingToMerge],
            returnType: "self"
        },
        // {
        //     desc: "mergeDeep",
        //     method: "mergeDeep",
        //     args: [thingToMerge]
        // },
        // {
        //     desc: "mergeDeepWith",
        //     method: "mergeDeepWith",
        //     args: [(oldVal, newVal) => oldVal / newVal, thingToMerge]
        // },
        {
            desc: "set existing key",
            method: "setIn",
            args: [['b', 'x'], 789],
            returnType: "self",
            deep: true
        },
        {
            desc: "setIn non existent key",
            method: "setIn",
            args: [['p'], 789],
            returnType: "self",
            deep: true
        },
        {
            desc: "setIn partially non existent key",
            method: "setIn",
            args: [['b', 'z'], 789],
            returnType: "self",
            deep: true
        },
        {
            desc: "set non existent path",
            method: "setIn",
            args: [['aaa', 'bbb'], 789],
            returnType: "self",
            deep: true
        },
        // {
        //     desc: "deleteIn non existent key",
        //     method: "deleteIn",
        //     args: [['zzz']]
        // },
        // {
        //     desc: "deleteIn existing key",
        //     method: "deleteIn",
        //     args: [['b', 'x']]
        // },
        // {
        //     desc: "updateIn key",
        //     method: "updateIn",
        //     args: [['a'], ii => ii + 100]
        // },
        // {
        //     desc: "updateIn nonexistent key",
        //     method: "updateIn",
        //     args: [['b','z'], 500, ii => ii]
        // },
        // {
        //     desc: "updateIn nonexistent path",
        //     method: "updateIn",
        //     args: [['aaa','bbb'], 500, ii => ii]
        // },
        // {
        //     desc: "mergeIn",
        //     method: "mergeIn",
        //     args: [['b', 'x'], thingToMerge]
        // },
        // {
        //     desc: "mergeDeepIn",
        //     method: "mergeDeepIn",
        //     args: [['b', 'x'], thingToMerge]
        // },
        {
            desc: "concat",
            method: "concat",
            args: [thingToMerge],
            returnType: "self"
        },
        {
            desc: "map",
            method: "map",
            args: [(value, key, iter) => `${value} ${key} ${iter.size}`],
            returnType: "self"
        },
        {
            desc: "mapKeys",
            method: "mapKeys",
            args: [(value, key, iter) => `${value} ${key} ${iter.size}`],
            returnType: "self"
        },
        {
            desc: "mapEntries",
            method: "mapEntries",
            args: [([key, value], index, iter) => [key, `${value} ${index} ${iter.size}`]],
            returnType: "self"
        },
        // flatMap
        // filter
        // filterNot
        // reverse
        // sort
        // sortBy
        // groupBy
        {
            desc: "get non existent key",
            method: "get",
            args: ['z'],
            returnType: "wrapped"
        },
        {
            desc: "get non existent key with default value",
            method: "get",
            args: ['z', 'not set'],
            returnType: "wrapped"
        },
        {
            desc: "get existent key",
            method: "get",
            args: ['a'],
            returnType: "wrapped"
        },
        {
            desc: "get existent key with default value",
            method: "get",
            args: ['a', 'not set'],
            returnType: "wrapped"
        },
        {
            desc: "has non existent key",
            method: "has",
            args: ['z'],
            returnType: "plain"
        },
        {
            desc: "has existent key",
            method: "has",
            args: ['a'],
            returnType: "plain"
        },
        {
            desc: "includes non existent value",
            method: "includes",
            args: [123123],
            returnType: "plain"
        },
        {
            desc: "includes existent value",
            method: "includes",
            args: [123],
            returnType: "plain"
        },
        {
            desc: "can get first value",
            method: "first",
            args: [],
            returnType: "wrapped"
        },
        {
            desc: "can get last value",
            method: "last",
            args: [],
            returnType: "wrapped"
        },
        {
            desc: "getIn existent keyPath",
            method: "getIn",
            args: [['b', 'x']],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn existent keyPath with default value",
            method: "getIn",
            args: [['b', 'x'], 'not set'],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn non existent keyPath",
            method: "getIn",
            args: [['z']],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn non existent keyPath with default value",
            method: "getIn",
            args: [['z'], 'not set'],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn partially non existent keyPath",
            method: "getIn",
            args: [['b', 'woo']],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn partially non existent keyPath with default value",
            method: "getIn",
            args: [['b', 'woo'], 'not set'],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "hasIn existent keyPath",
            method: "hasIn",
            args: ['a'],
            returnType: "plain"
        },
        {
            desc: "hasIn partially non existent keyPath",
            method: "hasIn",
            args: ['b', 'rrr'],
            returnType: "plain"
        },
        {
            desc: "hasIn non existent keyPath",
            method: "hasIn",
            args: [['z', 'g']],
            returnType: "plain"
        },
        {
            desc: "return true if a key returns true",
            method: "some",
            args: [ii => ii === 789],
            returnType: "plain"
        },
        {
            desc: "return false only if no keys return true",
            method: "some",
            args: [ii => ii === 123123123],
            returnType: "plain"
        },
        {
            desc: "return false if a key returns false",
            method: "every",
            args: [ii => ii === 789123],
            returnType: "plain"
        },
        {
            desc: "return true only if all keys return true",
            method: "every",
            args: [ii => ii],
            returnType: "plain"
        }
        // ^ every and some arent yet testing their callback args...
    ];

    if(only) {
        tests = tests.filter(ii => only.indexOf(ii.method) !== -1)
    }

    return tests;
};

var mapTestNames: Array = [
    //asImmutable
    //asMutable
    //butLast
    "clear",
    "concat",
    //count
    //countBy
    "delete",
    "deleteAll",
    //deleteIn
    //entries
    //entrySeq
    //equals
    "every",
    "filter",
    "filterNot",
    //find
    //findEntry
    //findKey
    //findLast
    //findLastEntry
    //findLastKey
    "first",
    "flatMap",
    //flatten
    //flip
    //forEach
    "get",
    "getIn",
    //groupBy
    "has",
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
    "reverse",
    "set",
    "setIn",
    //skip
    //skipLast
    //skipUntil
    //skipWhile
    //slice
    "some",
    "sort",
    "sortBy",
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
    //updateIn
    //values
    //valueSeq
    //withMutations
];

var listTestNames: Array = [
    //asImmutable
    //asMutable
    //butLast
    "clear",
    "concat",
    //count
    //countBy
    "delete",
    //deleteIn
    //entries
    //entrySeq
    //equals
    "every",
    "filter",
    "filterNot",
    //find
    //findEntry
    //findIndex
    //findKey
    //findLast
    //findLastEntry
    //findLastIndex
    //findLastKey
    "first",
    "flatMap",
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
    "reverse",
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
    "sort",
    "sortBy",
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
    "update"
    //updateIn
    //values
    //valueSeq
    //withMutations
    //zip
    //zipWith
];

test('all types should be able to be wrapped and unwrapped', (tt: *) => {
    types.forEach(({value, name}: Object) => {
        tt.deepEqual(Wrap(value).done(), value, `${name} should be able to be wrapped and unwrapped`);
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

test('Wrapped Maps have a size', (tt: *) => {
    var map: Map<string,*> = fromJS(sampleObject);
    tt.is(Wrap(map).size, map.size, 'size returns correct size');
});

mapTests({
    thingToMerge: fromJS(sampleObject2),
    only: mapTestNames
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

// test('Wrapped Lists have a size', (tt: *) => {
//     var map: List<string,*> = fromJS(sampleArray);
//     tt.is(Wrap(map).size, map.size, 'size returns correct size');
// });

// listTests({
//     thingToMerge: fromJS(sampleArray2),
//     only: listTestNames
// })
//     .forEach(({desc, method, args}: Object) => {
//         test(`"List.${method}" should ${desc}. Args: ${JSON.stringify(args)}`, (tt: *) => {
//             var list: List<*> = fromJS(sampleArray);
//             tt.true(
//                 is(
//                     Wrap(list)[method](...args).done(),
//                     // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
//                     list[method](...args)
//                 )
//             );
//         });
//     });

test('Objects have a size', (tt: *) => {
    tt.is(Wrap(sampleObject).size, Map(sampleObject).size, 'size returns correct size');
});

mapTests({
    thingToMerge: sampleObject2,
    only: mapTestNames
})
    .forEach((testConfig: Object) => {
        var {
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

            var collection = deep ? fromJS(sampleObject) : Map(sampleObject);

            // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
            var mapResult = collection[method](...args);

            if(returnType === "self") {
                mapResult = deep ? mapResult.toJS() : mapResult.toObject();
            }

            var unmutableResult = Wrap(sampleObject)[method](...args);

            if(returnType !== "plain") {
                unmutableResult = unmutableResult.done();
            }

            tt.deepEqual(mapResult, unmutableResult);
        });
    });

// test('Arrays have a size', (tt: *) => {
//     tt.is(Wrap(sampleArray).size, List(sampleArray).size, 'size returns correct size');
// });

// listTests({
//     thingToMerge: sampleArray2,
//     only: listTestNames
// })
//     .forEach((testConfig: Object) => {
//         var {
//             desc,
//             method,
//             args,
//             returnType,
//             // "self" if the thing being returned is a modified version of the original thing
//             // "wrapped" if the thing being returned is to be in an unmutable wrapper
//             // "plain" if the thing being returned is just the value (for 'status' methods like .has())
//             deep = false // true if we're testing a deep method
//         } = testConfig;

//         test(`"Array.${method}" should ${desc}. Args: ${JSON.stringify(args)}`, (tt: *) => {

//             var collection = deep ? fromJS(sampleArray) : List(sampleArray);

//             // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
//             var listResult = collection[method](...args);

//             if(returnType === "self") {
//                 listResult = deep ? listResult.toJS() : listResult.toArray();
//             }

//             var unmutableResult = Wrap(sampleObject)[method](...args);

//             if(returnType !== "plain") {
//                 unmutableResult = unmutableResult.done();
//             }

//             tt.deepEqual(listResult, unmutableResult);
//         });
//     });
