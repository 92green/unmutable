// @flow
import get from '../get';
import sortBy from '../sortBy';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `sortBy() should sortBy an item`,
    item: [
        {a: 3},
        {a: 8},
        {a: 6},
        {a: 4},
        {a: 4}
    ],
    fn: sortBy(get('a')),
    toJS: true,
    of: true
});

compare({
    name: `sortBy() should sortBy an item with comparator`,
    item: [
        {a: 3},
        {a: 8},
        {a: 6},
        {a: 4},
        {a: 4}
    ],
    fn: sortBy(get('a'), (a, b) => {
        if(a < b) { return 1; }
        if(a > b) { return -1; }
        if(a === b) { return 0; }
    }),
    toJS: true,
    of: true
});
