// @flow
import test from 'ava';

import {
    Map,
    List,
    Record,
    Set,
    Seq,
    OrderedMap,
    OrderedSet,
    Stack
} from 'immutable';

type TestTypesConfig = {
    name: string,
    fn: Function,
    expectedResult: *
};

export default ({name, fn, expectedResult}: TestTypesConfig) => {
    const ABRecord = Record({a: 1, b: 2});
    const types = {
        undefined: undefined,
        null: null,
        string: "string",
        number: 123,
        object: {object: true},
        array: ["array"],
        map: Map(),
        orderedMap: OrderedMap(),
        list: List(),
        record: new ABRecord({b: 3}),
        set: Set(),
        orderedSet: OrderedSet(),
        seq: Seq(),
        stack: Stack()
    };

    const result = Object.keys(types).reduce((obj, key) => ({
        ...obj,
        [key]: fn(types[key])
    }), {});

    test(name, (tt: *) => {
        tt.deepEqual(expectedResult, result);
    });
};
