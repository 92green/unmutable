// @flow
import test from 'ava';
import ListMethodNames from './ListMethodNames';

test('list method names should list method names', (tt: *) => {
    var thing = {
        a: 1,
        b: 2,
        c: () => 3,
        d: () => 4
    };

    tt.deepEqual(ListMethodNames(thing), ["c", "d"], "Correct method names should be found on object");
});
