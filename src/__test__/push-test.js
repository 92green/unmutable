// @flow
import push from '../push';
import compare from '../internal/compare';

compare({
    name: `push() should push an item`,
    item: [1,2,3],
    fn: push(4),
    toJS: true
});

compare({
    name: `push() should push more items`,
    item: [1,2,3],
    fn: push(4, 5),
    toJS: true
});
