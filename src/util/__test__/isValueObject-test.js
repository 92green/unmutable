// @flow
import isValueObject from '../isValueObject';
import testTypes from '../../internal/testTypes';

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
        set: true,
        orderedSet: true,
        seq: true,
        stack: true
    }
});
