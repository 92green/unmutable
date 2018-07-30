// @flow
import isRecord from '../isRecord';
import testTypes from '../../internal/__test__/testTypes-testutil';

testTypes({
    name: "isRecord",
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
        stack3: false,
        function: false,
        classInstance: false
    }
});
