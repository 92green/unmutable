// @flow
import rename from '../rename';
import {fromJS} from 'immutable';

test(`rename() should work`, () => {
    expect({b:2, c:3, z:1}).toEqual(rename('a','z')({a:1, b:2, c:3}));
});

test(`rename() on same key should work`, () => {
    expect({a:1, b:2, c:3}).toEqual(rename('a','a')({a:1, b:2, c:3}));
});

test(`rename() into existing key should work`, () => {
    expect({b:2, c:1}).toEqual(rename('a','c')({a:1, b:2, c:3}));
});

test(`rename() from non-existent key should work`, () => {
    expect({a:1, b:2, c:3, d: undefined}).toEqual(rename('z','d')({a:1, b:2, c:3}));
});

test(`rename() on Map should work`, () => {
    expect(rename('a','z')(fromJS({a:1, b:2, c:3})).equals(fromJS({b:2, c:3, z:1}))).toBe(true);
});
