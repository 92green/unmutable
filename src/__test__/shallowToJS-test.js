// @flow
import shallowToJS from '../shallowToJS';
import {fromJS} from 'immutable';

let deepMap = fromJS({x:10,y:20});

test(`shallowToJS() should toJS() immutable lists only one level`, () => {
    expect(shallowToJS()(fromJS([1,2,deepMap]))).toEqual([1,2,deepMap]);
});

test(`shallowToJS() should toJS() immutable maps only one level`, () => {
    expect(shallowToJS()(fromJS({a:1,b:2,c:deepMap}))).toEqual({a:1,b:2,c:deepMap});
});

test(`shallowToJS() should pass through objects`, () => {
    expect(shallowToJS()({a:1,b:2,c:3})).toEqual({a:1,b:2,c:3});
});

test(`shallowToJS() should pass through arrays`, () => {
    expect(shallowToJS()([1,2,3])).toEqual([1,2,3]);
});
