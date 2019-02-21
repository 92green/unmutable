// @flow
import lastIndexOf from '../lastIndexOf';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `lastIndexOf() on array should find index of element that exists`,
    item: [1,2,3,4,3,2,1],
    fn: lastIndexOf(2)
});

compare({
    name: `lastIndexOf() on array should find index of element that doesnt exist`,
    item: [1,2,3,4,3,2,1],
    fn: lastIndexOf(3.5)
});

test(`lastIndexOf() on array should find index of element that requires deep equality checking that doesnt exist`, () => {
    let data = [
        [1,2],
        [3,4],
        [3,4],
        [5,6]
    ];

    expect(lastIndexOf([3,4])(data)).toBe(2);
    expect(lastIndexOf([5,6])(data)).toBe(3);
    expect(lastIndexOf([3,6])(data)).toBe(-1);
});
