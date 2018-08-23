// @flow
import max from '../max';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `max() should max an array`,
    item: [1,54,2,56,0,-34],
    fn: max()
});

compare({
    name: `max() should max an array with nulls`,
    item: [123,45,4,null,234,null],
    fn: max()
});

compare({
    name: `max() should max an array with undefineds`,
    item: [123,45,4,undefined,234,undefined],
    fn: max()
});


compare({
    name: `max() should max an array with NaNs`,
    item: [123,45,4,NaN,234,NaN],
    fn: max()
});

compare({
    name: `max() should max an empty item`,
    item: [],
    fn: max()
});

compare({
    name: `max() should max a single-child item`,
    item: ["?"],
    fn: max()
});


compare({
    name: `max() should max an array with comparator`,
    item: [1,54,2,56,0,-34],
    fn: max((a, b) => {
        if(a < b) { return 1; }
        if(a > b) { return -1; }
        if(a === b) { return 0; }
    })
});

compare({
    name: `max() should max an object`,
    item: {
        a: 3,
        b: 8,
        c: 6,
        d: 4,
        e: 4
    },
    fn: max()
});
