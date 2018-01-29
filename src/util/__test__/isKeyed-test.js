// @flow
import isKeyed from '../isKeyed';
import testTypes from '../../internal/testTypes';

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
        set: false,
        orderedSet: false,
        seq: false,
        stack: false
    }
});
