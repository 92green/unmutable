// @flow
import method from '../method';
import test from 'ava';

test(`Call method in the pointy free stylee`, (t: *) => {
    let toLowerCase = method('toLowerCase');
    t.deepEqual("hello", toLowerCase()("HELLO"));
});

test(`Call method in the pointy free stylee with multiple args`, (t: *) => {
    let fill = method('fill');
    t.deepEqual([1, 2, 0, 0], fill(0,2,4)([1,2,3,4]));
});
