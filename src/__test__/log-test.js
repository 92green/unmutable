// @flow
import log from '../log';
import test from 'ava';

test(`log() should return value`, (t: *) => {
    let obj = {};
    t.is(obj, log()(obj));
});

test(`log() should return value and have message`, (t: *) => {
    let obj = {};
    t.is(obj, log("Message")(obj));
});

test(`log() should return value and have message and type`, (t: *) => {
    let obj = {};
    t.is(obj, log("Message", "warn")(obj));
});
