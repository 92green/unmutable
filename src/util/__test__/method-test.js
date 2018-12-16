// @flow
import method from '../../method';

test(`Call method in the pointy free stylee`, () => {
    let toLowerCase = method('toLowerCase');
    expect("hello").toEqual(toLowerCase()("HELLO"));
});

test(`Call method in the pointy free stylee with multiple args`, () => {
    let fill = method('fill');
    expect([1, 2, 0, 0]).toEqual(fill(0,2,4)([1,2,3,4]));
});
