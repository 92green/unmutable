// @flow
import pick from '../pick';
import test from 'ava';
import {fromJS} from 'immutable';

test(`pick() on object should work`, (tt: *) => {
    tt.deepEqual(
        {a:1, c:3},
        pick(['a','z','c'])({a:1, b:2, c:3})
    );
});

test(`pick() on Map should work`, (tt: *) => {
    tt.deepEqual(
        fromJS({a:1, c:3}),
        pick(['a','z','c'])(fromJS({a:1, b:2, c:3}))
    );
});
