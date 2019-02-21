// @flow
import endsWith from '../endsWith';
import {fromJS} from 'immutable';

test(`endsWith() on array should match if equal`, () => {
    expect(endsWith([1,2,3])([1,2,3])).toBe(true);
});

test(`endsWith() on array should match if smaller`, () => {
    expect(endsWith([3])([1,2,3])).toBe(true);
});

test(`endsWith() on array should not match if bigger`, () => {
    expect(endsWith([0,1,2,3])([1,2,3])).toBe(false);
});

test(`endsWith() on array should not match if different`, () => {
    expect(endsWith([4])([1,2,3])).toBe(false);
    expect(endsWith([4,2,3])([1,2,3])).toBe(false);
});

test(`endsWith() should compare elements deeply`, () => {
    expect(endsWith([
        {a: 3}
    ])([
        {a: 1},
        {a: 2},
        {a: 3}
    ])).toBe(true);
});
