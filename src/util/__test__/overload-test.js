// @flow
import overload from '../overload';
import {fromJS} from 'immutable';

test(`overload() should call correct sub functions`, () => {
    let myOverloadyFunction = overload({
        ["2"]: () => (a, b) => `${a} ${b}`,
        ["3"]: () => (c, a, b) => `(${a} ${b}) ${c}`,
    });

    expect("A B").toBe(myOverloadyFunction("A", "B"));
    expect("(A B) C").toBe(myOverloadyFunction("C", "A", "B"));
});

test(`overload() should throw if called with an incorrect number of arguments`, () => {
    let myOverloadyFunction = overload({
        ["2"]: () => (a, b) => `${a} ${b}`,
        ["3"]: () => (c, a, b) => `(${a} ${b}) ${c}`,
    });

    expect(() => myOverloadyFunction("A")).toThrowError(`Function must be given this many arguments: 2, 3`);
});

test(`overload() should pass innerArgs object to each overloaded myOverloadyFunction`, () => {
    let myOverloadyFunction = overload({
        ["2"]: (fn) => (a, c) => fn(a,"-",c),
        ["3"]: (fn) => (a, b, c) => fn(a,b,c)
    },
    (a,b,c) => `(${a} ${b}) ${c}`);

    expect("(A -) C").toBe(myOverloadyFunction("A", "C"));
    expect("(A B) C").toBe(myOverloadyFunction("A", "B", "C"));
});
