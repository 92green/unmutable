// @flow
import pick from '../pick';
import {fromJS} from 'immutable';

test(`pick() on object should work`, () => {
    expect({a:1, c:3}).toEqual(pick(['a','z','c'])({a:1, b:2, c:3}));
});

test(`pick() on Map should work`, () => {
    expect(fromJS({a:1, c:3})).toEqual(pick(['a','z','c'])(fromJS({a:1, b:2, c:3})));
});
