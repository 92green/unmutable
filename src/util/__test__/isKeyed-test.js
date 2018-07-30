// @flow
import isKeyed from '../isKeyed';
import testTypes from '../../internal/__test__/testTypes-testutil';

testTypes({
    name: "isKeyed",
    fn: isKeyed,
    expectedResult: {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: true,
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
        stack3: false,
        function: true,
        classInstance: true
    }
});
