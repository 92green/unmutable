// @flow
import testTypes from '../internal/__test__/testTypes-testutil';
import {typeFactory} from '../internal/__test__/testTypes-testutil';
import equalsType from '../equalsType';

let types = typeFactory();
const typeNames = Object.keys(types);

typeNames.forEach((type) => {
    let expectedResult = {};
    typeNames.forEach((tt) => {
        expectedResult[tt] = false;
    });

    expectedResult[type] = true;

    testTypes({
        name: `equalsType() on ${type} should work`,
        fn: (value) => equalsType(value)(types[type]),
        expectedResult
    });
});
