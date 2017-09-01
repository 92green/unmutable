// @flow
import test from 'ava';
import listMethodNames from './listMethodNames';

test('list method names should list method names', (tt: *) => {
    var thing = {
        a: 1,
        b: 2,
        c: () => 3,
        d: () => 4
    };

    tt.deepEqual(listMethodNames(thing), ["c", "d"], "Correct method names should be found on object");
});
