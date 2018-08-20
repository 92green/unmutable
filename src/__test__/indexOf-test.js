// @flow
import indexOf from '../indexOf';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `indexOf() on array should find index of element that exists`,
    item: [1,2,3,4,3,2,1],
    fn: indexOf(2)
});

compare({
    name: `indexOf() on array should find index of element that doesnt exist`,
    item: [1,2,3,4,3,2,1],
    fn: indexOf(3.5)
});

test(`indexOf() on array should find index of element that requires deep equality checking that doesnt exist`, () => {
    let data = [
        [1,2],
        [3,4],
        [3,4],
        [5,6]
    ];

    expect(indexOf([3,4])(data)).toBe(1);
    expect(indexOf([5,6])(data)).toBe(3);
    expect(indexOf([3,6])(data)).toBe(-1);
});
