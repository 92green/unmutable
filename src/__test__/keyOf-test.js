// @flow
import keyOf from '../keyOf';
import compare from '../internal/compare';
import compareIteratee from '../internal/compareIteratee';

compare({
    name: `keyOf() on object should find key of thing`,
    item: {a:1, b:2, c:3, d:2},
    fn: keyOf(2)
});

compare({
    name: `keyOf() on object should not find key of thing that doesnt exist`,
    item: {a:1, b:2, c:3, d:2},
    fn: keyOf(6)
});

compare({
    name: `keyOf() on array should find key of thing`,
    item: [1,2,3,2],
    fn: keyOf(2)
});

compare({
    name: `keyOf() on array should not find key of thing that doesnt exist`,
    item: [1,2,3,2],
    fn: keyOf(6)
});
