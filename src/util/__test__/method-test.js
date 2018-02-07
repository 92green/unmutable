// @flow
import method from '../method';
import test from 'ava';

test(`Call method in the pointy free stylee`, (tt: *) => {
    let toLowerCase = method('toLowerCase');
    tt.deepEqual("hello", toLowerCase()("HELLO"));
});

test(`Call method in the pointy free stylee with multiple args`, (tt: *) => {
    let fill = method('fill');
    tt.deepEqual([1, 2, 0, 0], fill(0,2,4)([1,2,3,4]));
});
