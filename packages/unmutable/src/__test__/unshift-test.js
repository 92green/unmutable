// @flow
import unshift from '../unshift';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `unshift() should unshift an item`,
    item: [1,2,3],
    fn: unshift(4),
    toJS: true,
    of: true
});

compare({
    name: `unshift() should unshift more items`,
    item: [1,2,3],
    fn: unshift(4, 5),
    toJS: true,
    of: true
});
