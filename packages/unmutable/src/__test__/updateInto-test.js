// @flow
import updateInto from '../updateInto';
import {fromJS} from 'immutable';

test(`updateInto() on object should work`, () => {
    expect({a:4, b:2, c:3}).toEqual(updateInto('a', ii => ii.b * 2)({a:1, b:2, c:3}));
});

test(`updateInto() on Map should work`, () => {
    expect(fromJS({a:4, b:2, c:3}).equals(
        updateInto('a', ii => ii.get('b') * 2)(fromJS({a:1, b:2, c:3}))
    )).toBe(true);
});
