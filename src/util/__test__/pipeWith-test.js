// @flow

import pipeWith from '../pipeWith';

test('pipeWith composes from left to right', () => {
    const double = x => x * 2;
    const square = x => x * x;
    expect(pipeWith(5, square)).toBe(25);
    expect(pipeWith(5, square, double)).toBe(50);
    expect(pipeWith(5, double, square, double)).toBe(200);
});

test('pipeWith throws at runtime if argument is not a function', () => {
    const square = x => x * x;
    const double = x => x * 2;

    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => pipeWith(1, square, double, false)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => pipeWith(1, square, double, undefined)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => pipeWith(1, square, double, true)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => pipeWith(1, square, double, NaN)).toThrow();
    // $FlowFixMe - deliberate misuse of types for testing
    expect(() => pipeWith(1, square, double, '42')).toThrow();
});

test('pipeWith returns the first given argument if given no functions', () => {
    expect(pipeWith(3)).toBe(3);
    expect(pipeWith()).toBe(undefined);
});
