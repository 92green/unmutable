// @flow
import doIf from '../doIf';

test(`doIf() should do the thing if true`, () => {
    expect([2,4,6]).toEqual(doIf(
        () => true,
        value => value.map(ii => ii * 2)
    )([1,2,3]));
});

test(`doIf() should not do the thing if false`, () => {
    expect([1,2,3]).toEqual(doIf(
        () => false,
        value => value.map(ii => ii * 2)
    )([1,2,3]));
});

test(`doIf() should be passed the value`, () => {
    let theValue = [1,2,3];

    doIf(
        (vv: *): * => {
            expect(theValue).toBe(vv);
            return false;
        },
        value => value
    )(theValue);
});

test(`doIf() should do the thing if true with 3 args`, () => {
    expect([2,4,6]).toEqual(doIf(
        () => true,
        value => value.map(ii => ii * 2),
        value => value.map(ii => ii * 3)
    )([1,2,3]));
});

test(`doIf() should do the other thing if false with 3 args`, () => {
    expect([3,6,9]).toEqual(doIf(
        () => false,
        value => value.map(ii => ii * 2),
        value => value.map(ii => ii * 3)
    )([1,2,3]));
});
