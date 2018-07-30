// @flow
import isPlainObject from '../isPlainObject';
import testTypes from '../../internal/__test__/testTypes-testutil';

testTypes({
    name: "isPlainObject",
    fn: isPlainObject,
    expectedResult: {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: true,
        array: false,
        map: false,
        orderedMap: false,
        list: false,
        record: false,
        recordExtended: false,
        set: false,
        orderedSet: false,
        seq: false,
        stack: false,
        map3: false,
        orderedMap3: false,
        list3: false,
        record3: false,
        recordExtended3: false,
        set3: false,
        orderedSet3: false,
        seq3: false,
        stack3: false,
        function: false,
        classInstance: false
    }
});
