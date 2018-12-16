// @flow

import range from '../../range';

test('range makes a range with from zero', () => {
    expect(range(4)).toEqual([0, 1, 2, 3]);
});

test('range makes a range with from zero downward', () => {
    expect(range(-4)).toEqual([0, -1, -2, -3]);
});

test('range makes a range with a start and end', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
});

test('range makes a range with a start, end and step', () => {
    expect(range(0, 20, 5)).toEqual([0, 5, 10, 15]);
});

