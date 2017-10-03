// @flow
import {Map, List} from 'immutable';

var types: Array<Object> = [
    {
        value: undefined,
        name: "undefined",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false,
        shouldBeWrapperType: "UnmutableWrapper"
    },
    {
        value: null,
        name: "null",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false,
        shouldBeWrapperType: "UnmutableWrapper"
    },
    {
        value: "string",
        name: "string",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false,
        shouldBeWrapperType: "UnmutableWrapper"
    },
    {
        value: 123,
        name: "number",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false,
        shouldBeWrapperType: "UnmutableWrapper"
    },
    {
        value: 0,
        name: "zero number",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false,
        shouldBeWrapperType: "UnmutableWrapper"
    },
    {
        value: true,
        name: "true boolean",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false,
        shouldBeWrapperType: "UnmutableWrapper"
    },
    {
        value: false,
        name: "false boolean",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false,
        shouldBeWrapperType: "UnmutableWrapper"
    },
    {
        value: () => {},
        name: "function",
        shouldBeCollection: false,
        shouldBeKeyed: false,
        shouldBeIndexed: false,
        shouldBeWrapperType: "UnmutableWrapper"
    },
    {
        value: {
            a: 1,
            b: 2
        },
        name: "object",
        shouldBeCollection: true,
        shouldBeKeyed: true,
        shouldBeIndexed: false,
        shouldBeWrapperType: "UnmutableObjectWrapper"
    },
    {
        value: [1,2,3],
        name: "array",
        shouldBeCollection: true,
        shouldBeKeyed: false,
        shouldBeIndexed: true,
        shouldBeWrapperType: "UnmutableArrayWrapper"
    },
    {
        value: Map({
            a: 1,
            b: 2
        }),
        name: "immutable map",
        shouldBeCollection: true,
        shouldBeKeyed: true,
        shouldBeIndexed: false,
        shouldBeWrapperType: "UnmutableMapWrapper"
    },
    {
        value: List([1,2,3]),
        name: "immutable list",
        shouldBeCollection: true,
        shouldBeKeyed: false,
        shouldBeIndexed: true,
        shouldBeWrapperType: "UnmutableListWrapper"
    }
];

export default function(test: Function, Wrap: Function) {
    test('all types should be able to be wrapped and unwrapped', (tt: *) => {
        types.forEach(({value, name}: Object) => {
            tt.deepEqual(Wrap(value).value, value, `${name} should be able to be wrapped and unwrapped`);
        });
    });

    test('all types should be wrapped in correct UnmutableWrappers', (tt: *) => {
        types.forEach(({value, shouldBeWrapperType, name}: Object) => {
            tt.is(Wrap(value).wrapperType(), shouldBeWrapperType, `${name} should be wrapped in "${shouldBeWrapperType}"`);
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

    test('it should not be possible to double wrap', (tt: *) => {
        tt.is(Wrap(123).value, 123);
        tt.is(Wrap(Wrap(123)).value, 123);
        tt.is(Wrap(Wrap(Wrap(123))).value, 123);
    });
}
