// @flow

import test from 'ava';
import pipeIf from '../pipeIf';

test('pipeIf composes from left to right', (tt: Object) => {
    const double = x => x * 2;
    const square = x => x * x;
    tt.is(pipeIf(() => true, square)(5), 25);
    tt.is(pipeIf(() => true, square, double)(5), 50);
    tt.is(pipeIf(() => true, double, square, double)(5), 200);
});

test('pipeIf can cope with no function arguments', (tt: Object) => {
    tt.is(pipeIf(() => true)(5), 5);
});

test('pipeIf should evaluate value when running conditional', (tt: Object) => {
    const double = x => x * 2;
    tt.is(pipeIf(x => x % 2 === 0, double, double)(2), 8, `even numbers should be quadrupled`);
    tt.is(pipeIf(x => x % 2 === 0, double, double)(10), 40, `even numbers should be quadrupled`);
    tt.is(pipeIf(x => x % 2 === 0, double, double)(3), 3, `odd numbers should be a passthrough`);
    tt.is(pipeIf(x => x % 2 === 0, double, double)(7), 7, `odd numbers should be a passthrough`);
});

