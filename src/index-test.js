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

var sampleMapTests: Function = (config: Object): Array<Object> => {
    const {thingToMerge} = config;

    return [
        {
            desc: "set non existent key",
            method: "set",
            args: ['d', 789]
        },
        {
            desc: "set existing key",
            method: "set",
            args: ['a', 789]
        },
        {
            desc: "delete non existent key",
            method: "delete",
            args: ['d']
        },
        {
            desc: "delete existing key",
            method: "delete",
            args: ['a']
        },
        {
            desc: "clear",
            method: "clear",
            args: []
        },
        {
            desc: "update whole collection",
            method: "update",
            args: [ii => ii.set('a', 'a')]
        },
        {
            desc: "update key",
            method: "update",
            args: ['a', ii => ii + 100]
        },
        {
            desc: "update nonexistent key",
            method: "update",
            args: ['z', 500, ii => ii]
        },
        {
            desc: "merge",
            method: "merge",
            args: [thingToMerge]
        },
        {
            desc: "mergeWith",
            method: "mergeWith",
            args: [(oldVal, newVal) => oldVal / newVal, thingToMerge]
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
        // {
        //     desc: "setIn non existent key",
        //     method: "setIn",
        //     args: [['b', 'z'], 789]
        // },
        // {
        //     desc: "set existing key",
        //     method: "setIn",
        //     args: [['b', 'x'], 789]
        // },
        // {
        //     desc: "set non existent path",
        //     method: "setIn",
        //     args: [['aaa', 'bbb'], 789]
        // },
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
            args: [thingToMerge]
        },
        {
            desc: "map",
            method: "map",
            args: [(value, key, iter) => `${value} ${key} ${iter.size}`]
        },
        {
            desc: "mapKeys",
            method: "mapKeys",
            args: [(value, key, iter) => `${value} ${key} ${iter.size}`]
        },
        {
            desc: "mapEntries",
            method: "mapEntries",
            args: [([key, value], index, iter) => [key, `${value} ${index} ${iter.size}`]]
        }
    ];
};

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

sampleMapTests({
    thingToMerge: fromJS(sampleObject2)
})
    .forEach(({desc, method, args}: Object) => {
        test(`"Map.${method}" should ${desc} like Map`, (tt: *) => {
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

sampleMapTests({
    thingToMerge: sampleObject2
})
    .forEach(({desc, method, args}: Object) => {
        test(`"Object.${method}" should ${desc} like Map`, (tt: *) => {
            tt.deepEqual(
                Wrap(sampleObject)[method](...args).done(),
                // $FlowFixMe: Flow doesnt know how to deal with calling computed properties
                Map(sampleObject)[method](...args).toObject()
            );
        });
    });
