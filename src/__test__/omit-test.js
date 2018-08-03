// @flow
import omit from '../omit';
import test from 'ava';
import {fromJS} from 'immutable';

test(`omit() on object should work`, (t: *) => {
    t.deepEqual(
        {b:2, c:3},
        omit(['a','z'])({a:1, b:2, c:3})
    );
});

test(`omit() on Map should work`, (t: *) => {
    t.deepEqual(
        fromJS({b:2, c:3}),
        omit(['a','z'])(fromJS({a:1, b:2, c:3}))
    );
});
