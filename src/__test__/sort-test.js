// @flow
import sort from '../sort';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `sort() should sort an item`,
    item: [3,7,2,4],
    fn: sort(),
    toJS: true
});

compare({
    name: `sort() should sort an item with comparator`,
    item: [3,7,2,4],
    fn: sort((a, b) => {
        if(a < b) { return 1; }
        if(a > b) { return -1; }
        if(a === b) { return 0; }
    }),
    toJS: true
});
