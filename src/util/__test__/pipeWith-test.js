// @flow

import test from 'ava';
import pipeWith from '../pipeWith';

test('pipeWith composes from left to right', (tt: Object) => {
    const double = x => x * 2;
    const square = x => x * x;
    tt.is(pipeWith(5, square), 25);
    tt.is(pipeWith(5, square, double), 50);
    tt.is(pipeWith(5, double, square, double), 200);
});

test('pipeWith throws at runtime if argument is not a function', (tt: Object) => {
    const square = x => x * x;
    const double = x => x * 2;

    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => pipeWith(1, square, double, false));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => pipeWith(1, square, double, undefined));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => pipeWith(1, square, double, true));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => pipeWith(1, square, double, NaN));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => pipeWith(1, square, double, '42'));
});

test('pipeWith returns the first given argument if given no functions', (tt: Object) => {
    tt.is(pipeWith(3), 3);
    tt.is(pipeWith(), undefined);
});
