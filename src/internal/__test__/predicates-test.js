// @flow
import {
    isImmutable,
    _isImmutableNoRecordChecks,
    isCollection,
    isKeyed,
    isIndexed,
    isAssociative,
    isOrdered,
    isRecord,
    isValueObject
} from '../predicates';

import testTypes from '../../internal/__test__/testTypes-testutil';

testTypes({
    name: "isImmutable() predicate should work",
    fn: isImmutable,
    expectedResult: {
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
        recordExtended: true,
        set: true,
        orderedSet: true,
        seq: true,
        stack: true,
        map3: true,
        orderedMap3: true,
        list3: true,
        record3: true,
        recordExtended3: true,
        set3: true,
        orderedSet3: true,
        seq3: true,
        stack3: true
    }
});

testTypes({
    name: "_isImmutableNoRecordChecks() predicate should work",
    fn: _isImmutableNoRecordChecks,
    expectedResult: {
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
        recordExtended: false,
        set: true,
        orderedSet: true,
        seq: true,
        stack: true,
        map3: true,
        orderedMap3: true,
        list3: true,
        record3: true,
        recordExtended3: true,
        set3: true,
        orderedSet3: true,
        seq3: true,
        stack3: true
    }
});

testTypes({
    name: "isCollection() predicate should work",
    fn: isCollection,
    expectedResult: {
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
        recordExtended: false,
        set: true,
        orderedSet: true,
        seq: true,
        stack: true,
        map3: true,
        orderedMap3: true,
        list3: true,
        record3: false,
        recordExtended3: false,
        set3: true,
        orderedSet3: true,
        seq3: true,
        stack3: true
    }
});

testTypes({
    name: "isKeyed() predicate should work",
    fn: isKeyed,
    expectedResult: {
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
        recordExtended: false,
        set: false,
        orderedSet: false,
        seq: false,
        stack: false,
        map3: true,
        orderedMap3: true,
        list3: false,
        record3: false,
        recordExtended3: false,
        set3: false,
        orderedSet3: false,
        seq3: false,
        stack3: false
    }
});

testTypes({
    name: "isIndexed() predicate should work",
    fn: isIndexed,
    expectedResult: {
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
        recordExtended: false,
        set: false,
        orderedSet: false,
        seq: true,
        stack: true,
        map3: false,
        orderedMap3: false,
        list3: true,
        record3: false,
        recordExtended3: false,
        set3: false,
        orderedSet3: false,
        seq3: true,
        stack3: true
    }
});

testTypes({
    name: "isAssociative() predicate should work",
    fn: isAssociative,
    expectedResult: {
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
        recordExtended: false,
        set: false,
        orderedSet: false,
        seq: true,
        stack: true,
        map3: true,
        orderedMap3: true,
        list3: true,
        record3: false,
        recordExtended3: false,
        set3: false,
        orderedSet3: false,
        seq3: true,
        stack3: true
    }
});

testTypes({
    name: "isOrdered() predicate should work",
    fn: isOrdered,
    expectedResult: {
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
        recordExtended: false,
        set: false,
        orderedSet: true,
        seq: true,
        stack: true,
        map3: false,
        orderedMap3: true,
        list3: true,
        record3: false,
        recordExtended3: false,
        set3: false,
        orderedSet3: true,
        seq3: true,
        stack3: true
    }
});

testTypes({
    name: "isRecord() predicate should work",
    fn: isRecord,
    expectedResult: {
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
        recordExtended: true,
        set: false,
        orderedSet: false,
        seq: false,
        stack: false,
        map3: false,
        orderedMap3: false,
        list3: false,
        record3: true,
        recordExtended3: true,
        set3: false,
        orderedSet3: false,
        seq3: false,
        stack3: false
    }
});

testTypes({
    name: "isValueObject() predicate should work",
    fn: isValueObject,
    expectedResult: {
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
        recordExtended: true,
        set: true,
        orderedSet: true,
        seq: true,
        stack: true,
        map3: true,
        orderedMap3: true,
        list3: true,
        record3: true,
        recordExtended3: true,
        set3: true,
        orderedSet3: true,
        seq3: true,
        stack3: true
    }
});
