// @flow
import {fromJS} from 'immutable';
import notEquals from '../notEquals';

test(`notEquals() should do what it says on the tin when things are the same`, () => {
    expect(notEquals({a:1,b:[2,3]})({a:1,b:[2,3]})).toBe(false);
});
test(`notEquals() should do what it says on the tin when things are not the same`, () => {
    expect(notEquals({a:1,b:[2,3]})({a:1,b:[2,4]})).toBe(true);
});

test(`notEquals() should do what it says on the tin when immutable things are the same`, () => {
    expect(notEquals(fromJS({a:1,b:[2,3]}))(fromJS({a:1,b:[2,3]}))).toBe(false);
});
test(`notEquals() should do what it says on the tin when immutable things are not the same`, () => {
    expect(notEquals(fromJS({a:1,b:[2,3]}))(fromJS({a:1,b:[2,4]}))).toBe(true);
});
