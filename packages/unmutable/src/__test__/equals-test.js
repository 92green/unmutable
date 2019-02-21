// @flow
import {fromJS} from 'immutable';
import equals from '../equals';

test(`equals() should do what it says on the tin when things are the same`, () => {
    expect(equals({a:1,b:[2,3]})({a:1,b:[2,3]})).toBe(true);
});
test(`equals() should do what it says on the tin when things are not the same`, () => {
    expect(equals({a:1,b:[2,3]})({a:1,b:[2,4]})).toBe(false);
});

test(`equals() should do what it says on the tin when immutable things are the same`, () => {
    expect(equals(fromJS({a:1,b:[2,3]}))(fromJS({a:1,b:[2,3]}))).toBe(true);
});
test(`equals() should do what it says on the tin when immutable things are not the same`, () => {
    expect(equals(fromJS({a:1,b:[2,3]}))(fromJS({a:1,b:[2,4]}))).toBe(false);
});
