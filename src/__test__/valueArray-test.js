// @flow
import valueArray from '../valueArray';
import test from 'ava';
import {fromJS} from 'immutable';

test(`valueArray() on object should work`, (t: *) => {
    t.deepEqual(
        [1,2,3],
        valueArray()({a:1, b:2, c:3})
    );
});

test(`valueArray() on Map should work`, (t: *) => {
    t.deepEqual(
        [1,2,3],
        valueArray()(fromJS({a:1, b:2, c:3}))
    );
});

test(`valueArray() on array should work`, (t: *) => {
    t.deepEqual(
        [4,5,6,7],
        valueArray()([4,5,6,7])
    );
});

test(`valueArray() on List should work`, (t: *) => {
    t.deepEqual(
        [4,5,6,7],
        valueArray()(fromJS([4,5,6,7]))
    );
});
