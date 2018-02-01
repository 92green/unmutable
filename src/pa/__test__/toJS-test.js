// @flow
import toJS from '../toJS';
import test from 'ava';
import {fromJS} from 'immutable';

test(`toJS() should toJS() immutable lists only one level`, (tt: *) => {
    tt.deepEqual(toJS()(fromJS([1,2,[1,2,3]])), [1,2,[1,2,3]]);
});

test(`toJS() should toJS() immutable maps only one level`, (tt: *) => {
    tt.deepEqual(toJS()(fromJS({a:1,b:2,c:[1,2,3]})), {a:1,b:2,c:[1,2,3]});
});

test(`toJS() should pass through objects`, (tt: *) => {
    tt.deepEqual(toJS()({a:1,b:2,c:3}), {a:1,b:2,c:3});
});

test(`toJS() should pass through arrays`, (tt: *) => {
    tt.deepEqual(toJS()([1,2,3]), [1,2,3]);
});
