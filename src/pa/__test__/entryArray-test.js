// @flow
import entryArray from '../entryArray';
import test from 'ava';
import {fromJS} from 'immutable';

test(`entryArray() on object should work`, (tt: *) => {
    tt.deepEqual(
        [['a',1],['b',2],['c',3]],
        entryArray()({a:1, b:2, c:3})
    );
});

test(`entryArray() on Map should work`, (tt: *) => {
    tt.deepEqual(
        [['a',1],['b',2],['c',3]],
        entryArray()(fromJS({a:1, b:2, c:3}))
    );
});

test(`entryArray() on array should work`, (tt: *) => {
    tt.deepEqual(
        [[0,4],[1,5],[2,6],[3,7]],
        entryArray()([4,5,6,7])
    );
});

test(`entryArray() on List should work`, (tt: *) => {
    tt.deepEqual(
        [[0,4],[1,5],[2,6],[3,7]],
        entryArray()(fromJS([4,5,6,7]))
    );
});
