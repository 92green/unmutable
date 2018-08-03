// @flow
import strictEquals from '../strictEquals';
import test from 'ava';

test(`strictEquals() should check equality strictly`, (t: *) => {
    t.false(strictEquals({a:1,b:[2,3]})({a:1,b:[2,3]}), `Same data, but different object references`);

    let obj = {a:1,b:[2,3]};
    t.true(strictEquals(obj)(obj), `Same object references`);
});
