// @flow
import concat from '../concat';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `concat() array should concat an item`,
    item: [1,2,3],
    fn: concat(4),
    toJS: true
});

compare({
    name: `concat() array should concat more items`,
    item: [1,2,3],
    fn: concat(4,5),
    toJS: true
});

compare({
    name: `concat() array should concat an array`,
    item: [1,2,3],
    fn: concat([4,5]),
    toJS: true
});

compare({
    name: `concat() array should concat more arrays`,
    item: [1,2,3],
    fn: concat([4,5],[6,7]),
    toJS: true
});
