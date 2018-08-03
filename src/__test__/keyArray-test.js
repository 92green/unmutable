// @flow
import keyArray from '../keyArray';
import {fromJS} from 'immutable';

test(`keyArray() on object should work`, () => {
    expect(['a','b','c']).toEqual(keyArray()({a:1, b:2, c:3}));
});

test(`keyArray() on Map should work`, () => {
    expect(['a','b','c']).toEqual(keyArray()(fromJS({a:1, b:2, c:3})));
});

test(`keyArray() on array should work`, () => {
    expect([0,1,2,3]).toEqual(keyArray()([4,5,6,7]));
});

test(`keyArray() on List should work`, () => {
    expect([0,1,2,3]).toEqual(keyArray()(fromJS([4,5,6,7])));
});
