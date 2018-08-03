// @flow
import clone from '../clone';
import test from 'ava';
import {fromJS} from 'immutable';

test(`clone() on object should work`, (t: *) => {
    let obj = {a:4, b:6};
    t.not(obj, clone()(obj));
});

test(`clone() on Map should pass through`, (t: *) => {
    let map = fromJS({a:1, b:2});
    t.is(map, clone()(map));
});

test(`clone() on array should work`, (t: *) => {
    let arr = [1,2,3];
    t.not(arr, clone()(arr));
});

test(`clone() on List should pass through`, (t: *) => {
    let list = fromJS([1,2,3]);
    t.is(list, clone()(list));
});
