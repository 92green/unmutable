// @flow
import isCollection from '../isCollection';
import testTypes from '../../internal/__test__/testTypes-testutil';

testTypes({
    name: "isCollection",
    fn: isCollection,
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
        stack3: true,
        function: true,
        classInstance: true,
        unmutableCompatible: true
    }
});
