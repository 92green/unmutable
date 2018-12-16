// @flow

import pipeIf from '../../pipeIf';

test('pipeIf composes from left to right', () => {
    const double = x => x * 2;
    const square = x => x * x;
    expect(pipeIf(() => true, square)(5)).toBe(25);
    expect(pipeIf(() => true, square, double)(5)).toBe(50);
    expect(pipeIf(() => true, double, square, double)(5)).toBe(200);
});

test('pipeIf can cope with no function arguments', () => {
    expect(pipeIf(() => true)(5)).toBe(5);
});

test('pipeIf should evaluate value when running conditional', () => {
    const double = x => x * 2;
    expect(pipeIf(x => x % 2 === 0, double, double)(2)).toBe(8);
    expect(pipeIf(x => x % 2 === 0, double, double)(10)).toBe(40);
    expect(pipeIf(x => x % 2 === 0, double, double)(3)).toBe(3);
    expect(pipeIf(x => x % 2 === 0, double, double)(7)).toBe(7);
});

