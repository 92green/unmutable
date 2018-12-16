// @flow

import pipe from '../../pipe';

test('pipe composes from left to right', () => {
    const double = x => x * 2;
    const square = x => x * x;
    expect(pipe(square)(5)).toBe(25);
    expect(pipe(square, double)(5)).toBe(50);
    expect(pipe(double, square, double)(5)).toBe(200);
});

test('pipe composes functions from left to right', () => {
    const a = next => x => next('a' + x);
    const b = next => x => next('b' + x);
    const c = next => x => next('c' + x);
    const final = x => x;

    expect(pipe(a, b, c)(final)('')).toBe('abc');
    expect(pipe(b, c, a)(final)('')).toBe('bca');
    expect(pipe(c, a, b)(final)('')).toBe('cab');
});

test('pipe throws at runtime if argument is not a function', () => {
    const square = x => x * x;
    const double = x => x * 2;

    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => pipe(square, double, false)(1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => pipe(square, double, undefined)(1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => pipe(square, double, true)(1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => pipe(square, double, NaN)(1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => pipe(square, double, '42')(1)).toThrow();
});

test('pipe returns the first given argument if given no functions', () => {
    expect(pipe()(3)).toBe(3);
    expect(pipe()()).toBe(undefined);
});

test('pipe returns the first function if given only one', () => {
    const fn = () => {};

    expect(pipe(fn)).toBe(fn);
});
