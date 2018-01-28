// @flow
import noop from '../noop';
import test from 'ava';

test(`noop() should return a noop`, (tt: *) => {
    let obj = {};
    tt.is(obj, noop()(obj));
});
