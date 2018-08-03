// @flow
import updateInto from '../updateInto';
import test from 'ava';
import {fromJS} from 'immutable';

test(`updateInto() on object should work`, (t: *) => {
    t.deepEqual(
        {a:4, b:2, c:3},
        updateInto('a', ii => ii.b * 2)({a:1, b:2, c:3})
    );
});

test(`updateInto() on Map should work`, (t: *) => {
    t.true(
        fromJS({a:4, b:2, c:3}).equals(
            updateInto('a', ii => ii.get('b') * 2)(fromJS({a:1, b:2, c:3}))
        )
    );
});
