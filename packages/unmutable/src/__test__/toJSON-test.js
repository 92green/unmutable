// @flow
import toJSON from '../toJSON';
import {fromJS} from 'immutable';

let deepMap = fromJS({x:10,y:20});

test(`toJSON() should toJS() immutable lists only one level`, () => {
    expect(toJSON()(fromJS([1,2,deepMap]))).toEqual([1,2,deepMap]);
});

test(`toJSON() should toJS() immutable maps only one level`, () => {
    expect(toJSON()(fromJS({a:1,b:2,c:deepMap}))).toEqual({a:1,b:2,c:deepMap});
});

test(`toJSON() should pass through objects`, () => {
    expect(toJSON()({a:1,b:2,c:3})).toEqual({a:1,b:2,c:3});
});

test(`toJSON() should pass through arrays`, () => {
    expect(toJSON()([1,2,3])).toEqual([1,2,3]);
});
