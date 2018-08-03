// @flow

import composeWith from '../composeWith';

test('composeWith composes from right to left', () => {
    const double = x => x * 2;
    const square = x => x * x;
    expect(composeWith(square, 5)).toBe(25);
    expect(composeWith(square, double, 5)).toBe(100);
    expect(composeWith(double, square, double, 5)).toBe(200);
});

test('composeWith throws at runtime if argument is not a function', () => {
    const square = x => x * x;
    const add = (x, y) => x + y;

    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => composeWith(square, add, false, 1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => composeWith(square, add, undefined, 1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => composeWith(square, add, true, 1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => composeWith(square, add, NaN, 1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => composeWith(square, add, '42', 1)).toThrow();
});

test('composeWith returns the first given argument if given no functions', () => {
    expect(composeWith(3)).toBe(3);
    expect(composeWith()).toBe(undefined);
});

test('composeWith returns the first given argument if given no functions', () => {
    expect(composeWith(3)).toBe(3);
    expect(composeWith()).toBe(undefined);
});
