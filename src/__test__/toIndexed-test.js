// @flow
import toIndexed from '../toIndexed';
import {fromJS} from 'immutable';

test(`toIndexed() on object should make an array`, () => {
    expect([1,2,3]).toEqual(toIndexed()({a:1, b:2, c:3}));
});

test(`toIndexed() on Map should make a List`, () => {
    expect(fromJS([1,2,3])).toEqual(toIndexed()(fromJS({a:1, b:2, c:3})));
});

test(`toIndexed() on array should make an array`, () => {
    expect([4,5,6,7]).toEqual(toIndexed()([4,5,6,7]));
});

test(`toIndexed() on List should make a List`, () => {
    expect(fromJS([4,5,6,7])).toEqual(toIndexed()(fromJS([4,5,6,7])));
});
