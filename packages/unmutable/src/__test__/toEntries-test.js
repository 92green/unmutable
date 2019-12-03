// @flow
import toEntries from '../toEntries';
import {fromJS} from 'immutable';

test(`toEntries() on object should work`, () => {
    expect([['a',1],['b',2],['c',3]]).toEqual(toEntries()({a:1, b:2, c:3}));
});

test(`toEntries() on Map should work`, () => {
    expect([['a',1],['b',2],['c',3]]).toEqual(toEntries()(fromJS({a:1, b:2, c:3})));
});

test(`toEntries() on array should work`, () => {
    expect([[0,4],[1,5],[2,6],[3,7]]).toEqual(toEntries()([4,5,6,7]));
});

test(`toEntries() on List should work`, () => {
    expect([[0,4],[1,5],[2,6],[3,7]]).toEqual(toEntries()(fromJS([4,5,6,7])));
});
