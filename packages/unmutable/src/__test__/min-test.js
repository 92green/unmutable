// @flow
import min from '../min';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `min() should min an array`,
    item: [1,54,2,56,0,-34],
    fn: min()
});

compare({
    name: `min() should min an array with nulls`,
    item: [123,45,4,null,234,null],
    fn: min()
});

compare({
    name: `min() should min an array with undefineds`,
    item: [123,45,4,undefined,234,undefined],
    fn: min()
});


compare({
    name: `min() should min an array with NaNs`,
    item: [123,45,4,NaN,234,NaN],
    fn: min()
});

compare({
    name: `min() should min an empty item`,
    item: [],
    fn: min()
});

compare({
    name: `min() should min a single-child item`,
    item: ["?"],
    fn: min()
});


compare({
    name: `min() should min an array with comparator`,
    item: [1,54,2,56,0,-34],
    fn: min((a, b) => {
        if(a < b) { return 1; }
        if(a > b) { return -1; }
        if(a === b) { return 0; }
    })
});

compare({
    name: `min() should min an object`,
    item: {
        a: 3,
        b: 8,
        c: 6,
        d: 4,
        e: 4
    },
    fn: min()
});
