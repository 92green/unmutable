// @flow
import shallowEquals from '../shallowEquals';
import test from 'ava';
import {fromJS} from 'immutable';

test(`shallowEquals() should check equality one level deep`, (t: *) => {

    t.true(shallowEquals([])([]), `True for empty data`);
    t.true(shallowEquals([1, 2, 3])([1, 2, 3]), `True for same data`);
    t.false(shallowEquals([1, 2, 0])([1, 2, ""]), `False for non strict data`);
    t.true(shallowEquals({hello: "hi!"})({hello: "hi!"}), `True for same data`);
    t.true(shallowEquals({a:1,b:2})({b:2,a:1}), `True for same data in different order on non-indexed data`);
    t.false(shallowEquals([1,2,undefined])([1,2]), `False for different lengths`);
    t.false(shallowEquals([1, 2, {a: 3}])([1, 2, {a: 3}]), `False for same data but different object references one layer in`);

    t.true(shallowEquals(fromJS([]))(fromJS([])), `True for empty data with immutable`);
    t.true(shallowEquals(fromJS([1, 2, 3]))(fromJS([1, 2, 3])), `True for same data with immutable`);
    t.false(shallowEquals(fromJS([1, 2, 0]))(fromJS([1, 2, ""])), `False for non strict data with immutable`);
    t.true(shallowEquals(fromJS({hello: "hi!"}))(fromJS({hello: "hi!"})), `True for same data with immutable`);
    t.true(shallowEquals(fromJS({a:1,b:2}))(fromJS({b:2,a:1})), `True for same data in different order on non-indexed data with immutable`);
    t.false(shallowEquals(fromJS([1,2,undefined]))(fromJS([1,2])), `False for different lengths with immutable`);
    t.false(shallowEquals(fromJS([1, 2, {a: 3}]))(fromJS([1, 2, {a: 3}])), `False for same data but different object references one layer in with immutable`);
});
