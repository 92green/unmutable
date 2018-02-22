// @flow
import toArray from '../toArray';
import test from 'ava';
import {fromJS} from 'immutable';

test(`toArray() on object should work`, (tt: *) => {
    tt.deepEqual(
        [1,2,3],
        toArray()({a:1, b:2, c:3})
    );
});

test(`toArray() on Map should work`, (tt: *) => {
    tt.deepEqual(
        [1,2,3],
        toArray()(fromJS({a:1, b:2, c:3}))
    );
});

test(`toArray() on array should work`, (tt: *) => {
    tt.deepEqual(
        [4,5,6,7],
        toArray()([4,5,6,7])
    );
});

test(`toArray() on List should work`, (tt: *) => {
    tt.deepEqual(
        [4,5,6,7],
        toArray()(fromJS([4,5,6,7]))
    );
});
