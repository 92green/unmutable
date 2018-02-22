// @flow
import toObject from '../toObject';
import test from 'ava';
import {fromJS} from 'immutable';

test(`toObject() on object should work`, (tt: *) => {
    tt.deepEqual(
        {a:1, b:2, c:3},
        toObject()({a:1, b:2, c:3})
    );
});

test(`toObject() on Map should work`, (tt: *) => {
    tt.deepEqual(
        {a:1, b:2, c:3},
        toObject()(fromJS({a:1, b:2, c:3}))
    );
});

test(`toObject() on array should work`, (tt: *) => {
    tt.deepEqual(
        {['0']:4,['1']:5,['2']:6,['3']:7},
        toObject()([4,5,6,7])
    );
});

test(`toObject() on List should work`, (tt: *) => {
    tt.deepEqual(
        {['0']:4,['1']:5,['2']:6,['3']:7},
        toObject()(fromJS([4,5,6,7]))
    );
});
