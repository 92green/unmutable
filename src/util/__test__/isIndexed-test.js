// @flow
import testTypes from '../../internal/testTypes';
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
        set: false,
        orderedSet: false,
        seq: true,
        stack: true
    }
});
