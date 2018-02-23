// @flow
import doIf from '../doIf';
import test from 'ava';

test(`doIf() should do the thing if true`, (tt: *) => {
    tt.deepEqual(
        [2,4,6],
        doIf(
            () => true,
            value => value.map(ii => ii * 2)
        )([1,2,3])
    );
});

test(`doIf() should not do the thing if false`, (tt: *) => {
    tt.deepEqual(
        [1,2,3],
        doIf(
            () => false,
            value => value.map(ii => ii * 2)
        )([1,2,3])
    );
});

test(`doIf() should be passed the value`, (tt: *) => {
    let theValue = [1,2,3];

    doIf(
        (vv: *): * => {
            tt.is(theValue, vv);
            return false;
        },
        value => value
    )(theValue);
});

test(`doIf() should do the thing if true with 3 args`, (tt: *) => {
    tt.deepEqual(
        [2,4,6],
        doIf(
            () => true,
            value => value.map(ii => ii * 2),
            value => value.map(ii => ii * 3)
        )([1,2,3])
    );
});

test(`doIf() should do the other thing if false with 3 args`, (tt: *) => {
    tt.deepEqual(
        [3,6,9],
        doIf(
            () => false,
            value => value.map(ii => ii * 2),
            value => value.map(ii => ii * 3)
        )([1,2,3])
    );
});
