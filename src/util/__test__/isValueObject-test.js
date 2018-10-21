// @flow
import isValueObject from '../isValueObject';
import testTypes from '../../internal/__test__/testTypes-testutil';

testTypes({
    name: "isValueObject",
    fn: isValueObject,
    expectedResult: {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: true,
        array: true,
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
        stack3: true,
        function: true,
        classInstance: true,
        unmutableCompatible: true
    }
});
