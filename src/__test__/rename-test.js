// @flow
import rename from '../rename';
import test from 'ava';
import {fromJS} from 'immutable';

test(`rename() should work`, (t: *) => {
    t.deepEqual(
        {b:2, c:3, z:1},
        rename('a','z')({a:1, b:2, c:3})
    );
});

test(`rename() on same key should work`, (t: *) => {
    t.deepEqual(
        {a:1, b:2, c:3},
        rename('a','a')({a:1, b:2, c:3})
    );
});

test(`rename() into existing key should work`, (t: *) => {
    t.deepEqual(
        {b:2, c:1},
        rename('a','c')({a:1, b:2, c:3})
    );
});

test(`rename() from non-existent key should work`, (t: *) => {
    t.deepEqual(
        {a:1, b:2, c:3, d: undefined},
        rename('z','d')({a:1, b:2, c:3})
    );
});

test(`rename() on Map should work`, (t: *) => {
    t.true(
        rename('a','z')(fromJS({a:1, b:2, c:3})).equals(fromJS({b:2, c:3, z:1}))
    );
});
