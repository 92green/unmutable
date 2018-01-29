// @flow
import log from '../log';
import test from 'ava';

test(`log() should return value`, (tt: *) => {
    let obj = {};
    tt.is(obj, log()(obj));
});

test(`log() should return value and have message`, (tt: *) => {
    let obj = {};
    tt.is(obj, log("Message")(obj));
});

test(`log() should return value and have message and type`, (tt: *) => {
    let obj = {};
    tt.is(obj, log("Message", "warn")(obj));
});
