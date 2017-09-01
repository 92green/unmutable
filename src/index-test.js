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

var sampleMapTests: Array<Object> = [
    {
        desc: "set new key",
        method: "set",
        args: ['d', 789]
    },
    {
        desc: "set existing key",
        method: "set",
        args: ['a', 789]
    },
    {
        desc: "delete non existant key",
        method: "set",
        args: ['d']
    },
    {
        desc: "delete existing key",
        method: "set",
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
    }
    // size, merge, mergeWith etc...
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

// test('object methods should still be callable', (tt: *) => {
//     var obj = {
//         thing: (a, b) => 123 + a + b
//     };

//     console.log(Wrap(obj));

//     tt.is(Wrap(obj).thing(1, 2), 126);
// });

test('Wrapped Maps should behave like Maps normally do', (tt: *) => {
    var map: Map<string,*> = fromJS(sampleObject);

    tt.is(Wrap(map).size, map.size, 'size returns correct size');

    sampleMapTests.forEach(({desc, method, args}: Object) => {
        tt.true(
            is(
                Wrap(map)[method](...args).done(),
                map[method](...args)
            ),
            `"${method}" should ${desc} like Map`
        );
    });
});

test('Objects can be used like Maps', (tt: *) => {

    tt.is(Wrap(sampleObject).size, Map(sampleObject).size, 'size returns correct size');

    sampleMapTests.forEach(({desc, method, args}: Object) => {
        tt.deepEqual(
            Wrap(sampleObject)[method](...args).done(),
            Map(sampleObject)[method](...args).toObject(),
            `"${method}" should ${desc} like Map`
        );
    });
});
