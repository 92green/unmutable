// @flow
import lastKeyOf from '../lastKeyOf';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `lastKeyOf() on object should find last key of thing`,
    item: {a:1, b:2, c:3, d:2},
    fn: lastKeyOf(2)
});

compare({
    name: `lastKeyOf() on object should not find last key of thing that doesnt exist`,
    item: {a:1, b:2, c:3, d:2},
    fn: lastKeyOf(6)
});

compare({
    name: `lastKeyOf() on array should find last key of thing`,
    item: [1,2,3,2],
    fn: lastKeyOf(2)
});

compare({
    name: `lastKeyOf() on array should not find last key of thing that doesnt exist`,
    item: [1,2,3,2],
    fn: lastKeyOf(6)
});
