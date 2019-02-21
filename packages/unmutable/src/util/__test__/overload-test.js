// @flow
import overload from '../../overload';
import {fromJS} from 'immutable';

test(`overload() should call correct sub functions`, () => {
    let myOverloadyFunction = overload({
        ["2"]: (a, b) => `${a} ${b}`,
        ["3"]: (c, a, b) => `(${a} ${b}) ${c}`,
    });

    expect("A B").toBe(myOverloadyFunction("A", "B"));
    expect("(A B) C").toBe(myOverloadyFunction("C", "A", "B"));
});

test(`overload() should throw if called with an incorrect number of arguments`, () => {
    let myOverloadyFunction = overload({
        ["2"]: (a, b) => `${a} ${b}`,
        ["3"]: (c, a, b) => `(${a} ${b}) ${c}`,
    });

    expect(() => myOverloadyFunction("A")).toThrowError(`Function must be given this many arguments: 2, 3`);
});
