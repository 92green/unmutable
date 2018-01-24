// @flow
import test from 'ava';
import {
    isImmutable,
    isCollection,
    isKeyed,
    isIndexed,
    isAssociative,
    isOrdered,
    isRecord,
    isValueObject
} from '../predicates';

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

const testPredicate = (tt, predicate, expectedResult) => {
    const ABRecord = Record({ a: 1, b: 2 });

    const types = {
        undefined: undefined,
        null: null,
        string: "string",
        number: 123,
        object: {obj: true},
        array: ["array"],
        map: Map(),
        orderedMap: OrderedMap(),
        list: List(),
        record: new ABRecord({ b: 3 }),
        set: Set(),
        orderedSet: OrderedSet(),
        seq: Seq(),
        stack: Stack()
    };

    const result = Object.keys(types).reduce((obj, key) => ({
        ...obj,
        [key]: predicate(types[key])
    }), {});

    tt.deepEqual(expectedResult, result);
};

test(`isImmutable() predicate should work`, (tt: *) => {
    let expectedResult = {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: false,
        array: false,
        map: true,
        orderedMap: true,
        list: true,
        record: true,
        set: true,
        orderedSet: true,
        seq: true,
        stack: true
    };
    testPredicate(tt, isImmutable, expectedResult)
});

test(`isCollection() predicate should work`, (tt: *) => {
    let expectedResult = {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: false,
        array: false,
        map: true,
        orderedMap: true,
        list: true,
        record: false,
        set: true,
        orderedSet: true,
        seq: true,
        stack: true
    };
    testPredicate(tt, isCollection, expectedResult)
});

test(`isKeyed() predicate should work`, (tt: *) => {
    let expectedResult = {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: false,
        array: false,
        map: true,
        orderedMap: true,
        list: false,
        record: false,
        set: false,
        orderedSet: false,
        seq: false,
        stack: false
    };
    testPredicate(tt, isKeyed, expectedResult)
});

test(`isIndexed() predicate should work`, (tt: *) => {
    let expectedResult = {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: false,
        array: false,
        map: false,
        orderedMap: false,
        list: true,
        record: false,
        set: false,
        orderedSet: false,
        seq: true,
        stack: true
    };
    testPredicate(tt, isIndexed, expectedResult)
});


test(`isAssociative() predicate should work`, (tt: *) => {
    let expectedResult = {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: false,
        array: false,
        map: true,
        orderedMap: true,
        list: true,
        record: false,
        set: false,
        orderedSet: false,
        seq: true,
        stack: true
    };
    testPredicate(tt, isAssociative, expectedResult)
});

test(`isOrdered() predicate should work`, (tt: *) => {
    let expectedResult = {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: false,
        array: false,
        map: false,
        orderedMap: true,
        list: true,
        record: false,
        set: false,
        orderedSet: true,
        seq: true,
        stack: true
    };
    testPredicate(tt, isOrdered, expectedResult)
});

test(`isRecord() predicate should work`, (tt: *) => {
    let expectedResult = {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: false,
        array: false,
        map: false,
        orderedMap: false,
        list: false,
        record: true,
        set: false,
        orderedSet: false,
        seq: false,
        stack: false
    };
    testPredicate(tt, isRecord, expectedResult)
});

test(`isValueObject() predicate should work`, (tt: *) => {
    let expectedResult = {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: false,
        array: false,
        map: true,
        orderedMap: true,
        list: true,
        record: true,
        set: true,
        orderedSet: true,
        seq: true,
        stack: true
    };
    testPredicate(tt, isValueObject, expectedResult)
});
