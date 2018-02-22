// @flow
import unshift from '../unshift';
import compare from '../internal/compare';

compare({
    name: `unshift() should unshift an item`,
    item: [1,2,3],
    fn: unshift(4),
    toJS: true
});

compare({
    name: `unshift() should unshift more items`,
    item: [1,2,3],
    fn: unshift(4, 5),
    toJS: true
});
