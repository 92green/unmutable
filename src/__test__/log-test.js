// @flow
import log from '../log';

test(`log() should return value`, () => {
    let obj = {};
    expect(obj).toBe(log()(obj));
});

test(`log() should return value and have message`, () => {
    let obj = {};
    expect(obj).toBe(log("Message")(obj));
});

test(`log() should return value and have message and type`, () => {
    let obj = {};
    expect(obj).toBe(log("Message", "warn")(obj));
});
