// @flow
import isCollection from '../isCollection';
import testTypes from '../../internal/testTypes';

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
        set: true,
        orderedSet: true,
        seq: true,
        stack: true
    }
});
