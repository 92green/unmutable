// @flow
import isPlainObject from '../isPlainObject';
import testTypes from '../../internal/testTypes';

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
        set: false,
        orderedSet: false,
        seq: false,
        stack: false
    }
});
