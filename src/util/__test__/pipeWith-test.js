// @flow

import test from 'ava';
import pipeWith from '../pipeWith';

test('pipeWith composes from left to right', (t: Object) => {
    const double = x => x * 2;
    const square = x => x * x;
    t.is(pipeWith(5, square), 25);
    t.is(pipeWith(5, square, double), 50);
    t.is(pipeWith(5, double, square, double), 200);
});

test('pipeWith throws at runtime if argument is not a function', (t: Object) => {
    const square = x => x * x;
    const double = x => x * 2;

    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => pipeWith(1, square, double, false));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => pipeWith(1, square, double, undefined));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => pipeWith(1, square, double, true));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => pipeWith(1, square, double, NaN));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => pipeWith(1, square, double, '42'));
});

test('pipeWith returns the first given argument if given no functions', (t: Object) => {
    t.is(pipeWith(3), 3);
    t.is(pipeWith(), undefined);
});
