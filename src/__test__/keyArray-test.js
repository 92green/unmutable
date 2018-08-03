// @flow
import keyArray from '../keyArray';
import test from 'ava';
import {fromJS} from 'immutable';

test(`keyArray() on object should work`, (t: *) => {
    t.deepEqual(
        ['a','b','c'],
        keyArray()({a:1, b:2, c:3})
    );
});

test(`keyArray() on Map should work`, (t: *) => {
    t.deepEqual(
        ['a','b','c'],
        keyArray()(fromJS({a:1, b:2, c:3}))
    );
});

test(`keyArray() on array should work`, (t: *) => {
    t.deepEqual(
        [0,1,2,3],
        keyArray()([4,5,6,7])
    );
});

test(`keyArray() on List should work`, (t: *) => {
    t.deepEqual(
        [0,1,2,3],
        keyArray()(fromJS([4,5,6,7]))
    );
});
