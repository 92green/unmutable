// @flow
import toIndexed from '../toIndexed';
import test from 'ava';
import {fromJS} from 'immutable';

test(`toIndexed() on object should make an array`, (tt: *) => {
    tt.deepEqual(
        [1,2,3],
        toIndexed()({a:1, b:2, c:3})
    );
});

test(`toIndexed() on Map should make a List`, (tt: *) => {
    tt.deepEqual(
        fromJS([1,2,3]),
        toIndexed()(fromJS({a:1, b:2, c:3}))
    );
});

test(`toIndexed() on array should make an array`, (tt: *) => {
    tt.deepEqual(
        [4,5,6,7],
        toIndexed()([4,5,6,7])
    );
});

test(`toIndexed() on List should make a List`, (tt: *) => {
    tt.deepEqual(
        fromJS([4,5,6,7]),
        toIndexed()(fromJS([4,5,6,7]))
    );
});
