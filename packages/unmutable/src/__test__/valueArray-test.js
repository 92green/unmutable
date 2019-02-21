// @flow
import valueArray from '../valueArray';
import {fromJS} from 'immutable';

test(`valueArray() on object should work`, () => {
    expect([1,2,3]).toEqual(valueArray()({a:1, b:2, c:3}));
});

test(`valueArray() on Map should work`, () => {
    expect([1,2,3]).toEqual(valueArray()(fromJS({a:1, b:2, c:3})));
});

test(`valueArray() on array should work`, () => {
    expect([4,5,6,7]).toEqual(valueArray()([4,5,6,7]));
});

test(`valueArray() on List should work`, () => {
    expect([4,5,6,7]).toEqual(valueArray()(fromJS([4,5,6,7])));
});
