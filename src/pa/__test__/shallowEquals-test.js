// @flow
import shallowEquals from '../shallowEquals';
import test from 'ava';
import {fromJS} from 'immutable';

test(`shallowEquals() should check equality one level deep`, (tt: *) => {

    tt.true(shallowEquals([])([]), `True for empty data`);
    tt.true(shallowEquals([1, 2, 3])([1, 2, 3]), `True for same data`);
    tt.false(shallowEquals([1, 2, 0])([1, 2, ""]), `False for non strict data`);
    tt.true(shallowEquals({hello: "hi!"})({hello: "hi!"}), `True for same data`);
    tt.true(shallowEquals({a:1,b:2})({b:2,a:1}), `True for same data in different order on non-indexed data`);
    tt.false(shallowEquals([1,2,undefined])([1,2]), `False for different lengths`);
    tt.false(shallowEquals([1, 2, {a: 3}])([1, 2, {a: 3}]), `False for same data but different object references one layer in`);

    tt.true(shallowEquals(fromJS([]))(fromJS([])), `True for empty data with immutable`);
    tt.true(shallowEquals(fromJS([1, 2, 3]))(fromJS([1, 2, 3])), `True for same data with immutable`);
    tt.false(shallowEquals(fromJS([1, 2, 0]))(fromJS([1, 2, ""])), `False for non strict data with immutable`);
    tt.true(shallowEquals(fromJS({hello: "hi!"}))(fromJS({hello: "hi!"})), `True for same data with immutable`);
    tt.true(shallowEquals(fromJS({a:1,b:2}))(fromJS({b:2,a:1})), `True for same data in different order on non-indexed data with immutable`);
    tt.false(shallowEquals(fromJS([1,2,undefined]))(fromJS([1,2])), `False for different lengths with immutable`);
    tt.false(shallowEquals(fromJS([1, 2, {a: 3}]))(fromJS([1, 2, {a: 3}])), `False for same data but different object references one layer in with immutable`);
});
