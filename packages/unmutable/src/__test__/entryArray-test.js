// @flow
import entryArray from '../entryArray';
import {fromJS} from 'immutable';

test(`entryArray() on object should work`, () => {
    expect([['a',1],['b',2],['c',3]]).toEqual(entryArray()({a:1, b:2, c:3}));
});

test(`entryArray() on Map should work`, () => {
    expect([['a',1],['b',2],['c',3]]).toEqual(entryArray()(fromJS({a:1, b:2, c:3})));
});

test(`entryArray() on array should work`, () => {
    expect([[0,4],[1,5],[2,6],[3,7]]).toEqual(entryArray()([4,5,6,7]));
});

test(`entryArray() on List should work`, () => {
    expect([[0,4],[1,5],[2,6],[3,7]]).toEqual(entryArray()(fromJS([4,5,6,7])));
});
