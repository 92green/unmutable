// @flow
import toObject from '../toObject';
import {fromJS} from 'immutable';

test(`toObject() on object should work`, () => {
    expect({a:1, b:2, c:3}).toEqual(toObject()({a:1, b:2, c:3}));
});

test(`toObject() on Map should work`, () => {
    expect({a:1, b:2, c:3}).toEqual(toObject()(fromJS({a:1, b:2, c:3})));
});

test(`toObject() on array should work`, () => {
    expect({['0']:4,['1']:5,['2']:6,['3']:7}).toEqual(toObject()([4,5,6,7]));
});

test(`toObject() on List should work`, () => {
    expect({['0']:4,['1']:5,['2']:6,['3']:7}).toEqual(toObject()(fromJS([4,5,6,7])));
});
