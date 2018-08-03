// @flow
import toKeyed from '../toKeyed';
import {fromJS} from 'immutable';

test(`toKeyed() on object should make object`, () => {
    expect({a:1, b:2, c:3}).toEqual(toKeyed()({a:1, b:2, c:3}));
});

test(`toKeyed() on Map should make Map`, () => {
    expect(fromJS({a:1, b:2, c:3})).toEqual(toKeyed()(fromJS({a:1, b:2, c:3})));
});

test(`toKeyed() on array should make object`, () => {
    expect({['0']:4,['1']:5,['2']:6,['3']:7}).toEqual(toKeyed()([4,5,6,7]));
});

test(`toKeyed() on List should make Map`, () => {
    expect(fromJS({})
        .set(0,4)
        .set(1,5)
        .equals(toKeyed()(fromJS([4,5])))).toBe(true);
});
