// @flow

import test from 'ava';
import composeWith from '../composeWith';

test('composeWith composes from right to left', (t: Object) => {
    const double = x => x * 2;
    const square = x => x * x;
    t.is(composeWith(square, 5), 25);
    t.is(composeWith(square, double, 5), 100);
    t.is(composeWith(double, square, double, 5), 200);
});

test('composeWith throws at runtime if argument is not a function', (t: Object) => {
    const square = x => x * x;
    const add = (x, y) => x + y;

    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => composeWith(square, add, false, 1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => composeWith(square, add, undefined, 1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => composeWith(square, add, true, 1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => composeWith(square, add, NaN, 1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => composeWith(square, add, '42', 1));
});

test('composeWith returns the first given argument if given no functions', (t: Object) => {
    t.is(composeWith(3), 3);
    t.is(composeWith(), undefined);
});

test('composeWith returns the first given argument if given no functions', (t: Object) => {
    t.is(composeWith(3), 3);
    t.is(composeWith(), undefined);
});
