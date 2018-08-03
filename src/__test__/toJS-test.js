// @flow
import toJS from '../toJS';
import {fromJS} from 'immutable';

test(`toJS() should toJS() immutable lists only one level`, () => {
    expect(toJS()(fromJS([1,2,[1,2,3]]))).toEqual([1,2,[1,2,3]]);
});

test(`toJS() should toJS() immutable maps only one level`, () => {
    expect(toJS()(fromJS({a:1,b:2,c:[1,2,3]}))).toEqual({a:1,b:2,c:[1,2,3]});
});

test(`toJS() should pass through objects`, () => {
    expect(toJS()({a:1,b:2,c:3})).toEqual({a:1,b:2,c:3});
});

test(`toJS() should pass through arrays`, () => {
    expect(toJS()([1,2,3])).toEqual([1,2,3]);
});
