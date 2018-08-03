// @flow
import overload from '../overload';
import test from 'ava';
import {fromJS} from 'immutable';

test(`overload() should call correct sub functions`, (t: *) => {
    let myOverloadyFunction = overload({
        ["2"]: () => (a, b) => `${a} ${b}`,
        ["3"]: () => (c, a, b) => `(${a} ${b}) ${c}`,
    });

    t.is("A B", myOverloadyFunction("A", "B"));
    t.is("(A B) C", myOverloadyFunction("C", "A", "B"));
});

test(`overload() should throw if called with an incorrect number of arguments`, (t: *) => {
    let myOverloadyFunction = overload({
        ["2"]: () => (a, b) => `${a} ${b}`,
        ["3"]: () => (c, a, b) => `(${a} ${b}) ${c}`,
    });

    t.is(t.throws(() => myOverloadyFunction("A"), Error).message, `Function must be given this many arguments: 2, 3`);
});

test(`overload() should pass innerArgs object to each overloaded myOverloadyFunction`, (t: *) => {
    let myOverloadyFunction = overload({
        ["2"]: (fn) => (a, c) => fn(a,"-",c),
        ["3"]: (fn) => (a, b, c) => fn(a,b,c)
    },
    (a,b,c) => `(${a} ${b}) ${c}`);

    t.is("(A -) C", myOverloadyFunction("A", "C"));
    t.is("(A B) C", myOverloadyFunction("A", "B", "C"));
});
