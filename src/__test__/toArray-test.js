// @flow
import toArray from '../toArray';
import {fromJS} from 'immutable';

test(`toArray() on object should work`, () => {
    expect([1,2,3]).toEqual(toArray()({a:1, b:2, c:3}));
});

test(`toArray() on Map should work`, () => {
    expect([1,2,3]).toEqual(toArray()(fromJS({a:1, b:2, c:3})));
});

test(`toArray() on array should work`, () => {
    expect([4,5,6,7]).toEqual(toArray()([4,5,6,7]));
});

test(`toArray() on List should work`, () => {
    expect([4,5,6,7]).toEqual(toArray()(fromJS([4,5,6,7])));
});
