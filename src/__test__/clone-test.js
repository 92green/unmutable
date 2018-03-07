// @flow
import clone from '../clone';
import test from 'ava';
import {fromJS} from 'immutable';

test(`clone() on object should work`, (tt: *) => {
    let obj = {a:4, b:6};
    tt.not(obj, clone()(obj));
});

test(`clone() on Map should pass through`, (tt: *) => {
    let map = fromJS({a:1, b:2});
    tt.is(map, clone()(map));
});

test(`clone() on array should work`, (tt: *) => {
    let arr = [1,2,3];
    tt.not(arr, clone()(arr));
});

test(`clone() on List should pass through`, (tt: *) => {
    let list = fromJS([1,2,3]);
    tt.is(list, clone()(list));
});
