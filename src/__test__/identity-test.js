// @flow
import identity from '../identity';
import test from 'ava';

test(`identity() should return a function that just passes values through`, (tt: *) => {
    let obj = {};
    tt.is(obj, identity()(obj));
});
