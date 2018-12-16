// @flow

import compose from '../../compose';

test('compose composes from right to left', () => {
    const double = x => x * 2;
    const square = x => x * x;
    expect(compose(square)(5)).toBe(25);
    expect(compose(square, double)(5)).toBe(100);
    expect(compose(double, square, double)(5)).toBe(200);
});

test('compose composes functions from right to left', () => {
    const a = next => x => next(x + 'a');
    const b = next => x => next(x + 'b');
    const c = next => x => next(x + 'c');
    const final = x => x;

    expect(compose(a, b, c)(final)('')).toBe('abc');
    expect(compose(b, c, a)(final)('')).toBe('bca');
    expect(compose(c, a, b)(final)('')).toBe('cab');
});

test('compose throws at runtime if argument is not a function', () => {
    const square = x => x * x;
    const add = (x, y) => x + y;

    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => compose(square, add, false)(1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => compose(square, add, undefined)(1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => compose(square, add, true)(1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => compose(square, add, NaN)(1)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => compose(square, add, '42')(1)).toThrow();
});

test('compose returns the first given argument if given no functions', () => {
    expect(compose()(1, 2)).toBe(1);
    expect(compose()(3)).toBe(3);
    expect(compose()()).toBe(undefined);
});

test('compose returns the first function if given only one', () => {
    const fn = () => {};

    expect(compose(fn)).toBe(fn);
});
