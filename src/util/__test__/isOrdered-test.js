// @flow
import isOrdered from '../isOrdered';
import testTypes from '../../internal/__test__/testTypes-testutil';

testTypes({
    name: "isOrdered",
    fn: isOrdered,
    expectedResult: {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: false,
        array: true,
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
        stack3: true,
        function: false,
        classInstance: false,
        unmutableCompatible: false
    }
});
