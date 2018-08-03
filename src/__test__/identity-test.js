// @flow
import identity from '../identity';

test(`identity() should return a function that just passes values through`, () => {
    let obj = {};
    expect(obj).toBe(identity()(obj));
});
