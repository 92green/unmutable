// @flow

import test from 'ava';
import pipe from '../pipe';

test('pipe composes from left to right', (tt: Object) => {
    const double = x => x * 2;
    const square = x => x * x;
    tt.is(pipe(square)(5), 25);
    tt.is(pipe(square, double)(5), 50);
    tt.is(pipe(double, square, double)(5), 200);
});

test('pipe composes functions from left to right', (tt: Object) => {
    const a = next => x => next('a' + x);
    const b = next => x => next('b' + x);
    const c = next => x => next('c' + x);
    const final = x => x;

    tt.is(pipe(a, b, c)(final)(''), 'abc');
    tt.is(pipe(b, c, a)(final)(''), 'bca');
    tt.is(pipe(c, a, b)(final)(''), 'cab');
});

test('pipe throws at runtime if argument is not a function', (tt: Object) => {
    const square = x => x * x;
    const add = (x, y) => x + y;

    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => pipe(square, add, false)(1, 2));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => pipe(square, add, undefined)(1, 2));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => pipe(square, add, true)(1, 2));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => pipe(square, add, NaN)(1, 2));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => pipe(square, add, '42')(1, 2));
});

test('pipe returns the first given argument if given no functions', (tt: Object) => {
    tt.is(pipe()(1, 2), 1);
    tt.is(pipe()(3), 3);
    tt.is(pipe()(), undefined);
});

test('pipe returns the first function if given only one', (tt: Object) => {
    const fn = () => {};

    tt.is(pipe(fn), fn);
});
