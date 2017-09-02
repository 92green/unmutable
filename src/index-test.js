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

var unmutableTests: Function = (config: Object): Array<Object> => {
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
        }
    ];

    if(only) {
        tests = tests.filter(ii => only.indexOf(ii.method) !== -1)
    }

    return tests;
};

var mapTests: Array = [
    "clear",
    "concat",
    "delete",
    "deleteAll",
    "filter",
    "filterNot",
    "first",
    "flatMap",
    "get",
    "getIn",
    "has",
    "hasIn",
    "includes",
    "last",
    "map",
    "mapEntries",
    "mapKeys",
    "merge",
    "mergeWith",
    "reverse",
    "set",
    "setIn",
    "sort",
    "sortBy",
    "update"
];

var listTests: Array = [
    "clear",
    "concat",
    "delete",
    "deleteAll",
    "filter",
    "filterNot",
    "first",
    "flatMap",
    "get",
    "getIn",
    "has",
    "hasIn",
    "includes",
    "last",
    "map",
    "mapEntries",
    "mapKeys",
    "merge",
    "mergeWith",
    "reverse",
    "set",
    "setIn",
    "sort",
    "sortBy",
    "update"
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

unmutableTests({
    thingToMerge: fromJS(sampleObject2),
    only: mapTests
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

unmutableTests({
    thingToMerge: sampleObject2,
    only: mapTests
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
