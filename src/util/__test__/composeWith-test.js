// @flow

import test from 'ava';
import composeWith from '../composeWith';

test('composeWith composes from right to left', (tt: Object) => {
    const double = x => x * 2;
    const square = x => x * x;
    tt.is(composeWith(square, 5), 25);
    tt.is(composeWith(square, double, 5), 100);
    tt.is(composeWith(double, square, double, 5), 200);
});

test('composeWith throws at runtime if argument is not a function', (tt: Object) => {
    const square = x => x * x;
    const add = (x, y) => x + y;

    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => composeWith(square, add, false, 1));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => composeWith(square, add, undefined, 1));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => composeWith(square, add, true, 1));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => composeWith(square, add, NaN, 1));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => composeWith(square, add, '42', 1));
});

test('composeWith returns the first given argument if given no functions', (tt: Object) => {
    tt.is(composeWith(3), 3);
    tt.is(composeWith(), undefined);
});

test('composeWith returns the first given argument if given no functions', (tt: Object) => {
    tt.is(composeWith(3), 3);
    tt.is(composeWith(), undefined);
});
