// @flow
import testTypes from '../../internal/__test__/testTypes-testutil';
import isIndexed from '../isIndexed';

testTypes({
    name: "isIndexed",
    fn: isIndexed,
    expectedResult: {
        undefined: false,
        null: false,
        string: false,
        number: false,
        object: false,
        array: true,
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
