// @flow
import shallowToJS from '../shallowToJS';
import test from 'ava';
import {fromJS} from 'immutable';

let deepMap = fromJS({x:10,y:20});

test(`shallowToJS() should toJS() immutable lists only one level`, (tt: *) => {
    tt.deepEqual(shallowToJS()(fromJS([1,2,deepMap])), [1,2,deepMap]);
});

test(`shallowToJS() should toJS() immutable maps only one level`, (tt: *) => {
    tt.deepEqual(shallowToJS()(fromJS({a:1,b:2,c:deepMap})), {a:1,b:2,c:deepMap});
});

test(`shallowToJS() should pass through objects`, (tt: *) => {
    tt.deepEqual(shallowToJS()({a:1,b:2,c:3}), {a:1,b:2,c:3});
});

test(`shallowToJS() should pass through arrays`, (tt: *) => {
    tt.deepEqual(shallowToJS()([1,2,3]), [1,2,3]);
});
