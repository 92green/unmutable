// @flow
import startsWith from '../startsWith';
import {fromJS} from 'immutable';

test(`startsWith() on array should match if equal`, () => {
    expect(startsWith([1,2,3])([1,2,3])).toBe(true);
});

test(`startsWith() on array should match if smaller`, () => {
    expect(startsWith([1])([1,2,3])).toBe(true);
});

test(`startsWith() on array should not match if bigger`, () => {
    expect(startsWith([1,2,3,4])([1,2,3])).toBe(false);
});

test(`startsWith() on array should not match if different`, () => {
    expect(startsWith([4])([1,2,3])).toBe(false);
    expect(startsWith([1,2,4])([1,2,3])).toBe(false);
});

test(`startsWith() should compare elements deeply`, () => {
    expect(startsWith([
        {a: 1}
    ])([
        {a: 1},
        {a: 2},
        {a: 3}
    ])).toBe(true);
});
