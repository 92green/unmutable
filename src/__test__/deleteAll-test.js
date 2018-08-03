// @flow
import deleteAll from '../deleteAll';
import {fromJS} from 'immutable';

test(`deleteAll() on object should work`, () => {
    expect({b:2, c:3}).toEqual(deleteAll(['a','z'])({a:1, b:2, c:3}));
});

test(`deleteAll() on Map should work`, () => {
    expect(fromJS({b:2, c:3})).toEqual(deleteAll(['a','z'])(fromJS({a:1, b:2, c:3})));
});
