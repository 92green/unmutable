// @flow
import identity from '../identity';
import test from 'ava';

test(`identity() should return a function that just passes values through`, (t: *) => {
    let obj = {};
    t.is(obj, identity()(obj));
});
