// @flow

import test from 'ava';
import pipeIf from '../pipeIf';

test('pipeIf composes from left to right', (t: Object) => {
    const double = x => x * 2;
    const square = x => x * x;
    t.is(pipeIf(() => true, square)(5), 25);
    t.is(pipeIf(() => true, square, double)(5), 50);
    t.is(pipeIf(() => true, double, square, double)(5), 200);
});

test('pipeIf can cope with no function arguments', (t: Object) => {
    t.is(pipeIf(() => true)(5), 5);
});

test('pipeIf should evaluate value when running conditional', (t: Object) => {
    const double = x => x * 2;
    t.is(pipeIf(x => x % 2 === 0, double, double)(2), 8, `even numbers should be quadrupled`);
    t.is(pipeIf(x => x % 2 === 0, double, double)(10), 40, `even numbers should be quadrupled`);
    t.is(pipeIf(x => x % 2 === 0, double, double)(3), 3, `odd numbers should be a passthrough`);
    t.is(pipeIf(x => x % 2 === 0, double, double)(7), 7, `odd numbers should be a passthrough`);
});

