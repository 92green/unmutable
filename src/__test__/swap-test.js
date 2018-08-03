// @flow
import swap from '../swap';
import {fromJS} from 'immutable';

test(`swap() on object should swap two existing values`, () => {
    expect({a:2, b:1, c:3}).toEqual(swap('a','b')({a:1, b:2, c:3}));
});

test(`swap() on Map should swap two existing values`, () => {
    expect({a:2, b:1, c:3}).toEqual(swap('a','b')(fromJS({a:1, b:2, c:3})).toJS());
});

test(`swap() on object should with a non existing value`, () => {
    expect({a:undefined, b:2, c:3, z:1}).toEqual(swap('a','z')({a:1, b:2, c:3}));
});

test(`swap() on array should swap two existing values`, () => {
    expect([1,3,2]).toEqual(swap(1,2)([1,2,3]));
});

test(`swap() on List should swap two existing values`, () => {
    expect([1,3,2]).toEqual(swap(1,2)(fromJS([1,2,3])).toJS());
});

test(`swap() on array should swap with a non existing value`, () => {
    expect([1,undefined,3,2]).toEqual(swap(1,3)([1,2,3]));
});
