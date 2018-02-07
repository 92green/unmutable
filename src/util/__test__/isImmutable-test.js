// @flow
import isImmutable from '../isImmutable';
import testTypes from '../../internal/testTypes';

testTypes({
    name: "isImmutable",
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
