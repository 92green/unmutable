// @flow

import test from 'ava';
import pipe from '../pipe';

test('pipe composes from left to right', (t: Object) => {
    const double = x => x * 2;
    const square = x => x * x;
    t.is(pipe(square)(5), 25);
    t.is(pipe(square, double)(5), 50);
    t.is(pipe(double, square, double)(5), 200);
});

test('pipe composes functions from left to right', (t: Object) => {
    const a = next => x => next('a' + x);
    const b = next => x => next('b' + x);
    const c = next => x => next('c' + x);
    const final = x => x;

    t.is(pipe(a, b, c)(final)(''), 'abc');
    t.is(pipe(b, c, a)(final)(''), 'bca');
    t.is(pipe(c, a, b)(final)(''), 'cab');
});

test('pipe throws at runtime if argument is not a function', (t: Object) => {
    const square = x => x * x;
    const double = x => x * 2;

    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => pipe(square, double, false)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => pipe(square, double, undefined)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => pipe(square, double, true)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => pipe(square, double, NaN)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => pipe(square, double, '42')(1));
});

test('pipe returns the first given argument if given no functions', (t: Object) => {
    t.is(pipe()(3), 3);
    t.is(pipe()(), undefined);
});

test('pipe returns the first function if given only one', (t: Object) => {
    const fn = () => {};

    t.is(pipe(fn), fn);
});
