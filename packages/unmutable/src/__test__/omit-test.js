// @flow
import omit from '../omit';
import {fromJS} from 'immutable';

test(`omit() on object should work`, () => {
    expect({b:2, c:3}).toEqual(omit(['a','z'])({a:1, b:2, c:3}));
});

test(`omit() on Map should work`, () => {
    expect(fromJS({b:2, c:3})).toEqual(omit(['a','z'])(fromJS({a:1, b:2, c:3})));
});
