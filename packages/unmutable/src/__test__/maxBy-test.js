// @flow
import get from '../get';
import maxBy from '../maxBy';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `maxBy() should maxBy an array`,
    item: [
        {a: 3},
        {a: 8},
        {a: 6},
        {a: 4},
        {a: 4}
    ],
    fn: maxBy(get('a')),
    toJS: true
});

compare({
    name: `maxBy() should maxBy an array with nulls`,
    item: [
        {a: 3},
        {a: null},
        {a: null},
        {a: 4},
        {a: 4}
    ],
    fn: maxBy(get('a')),
    toJS: true
});

compare({
    name: `maxBy() should maxBy an array with undefineds`,
    item: [
        {a: 3},
        {a: undefined},
        {a: undefined},
        {a: 4},
        {a: 4}
    ],
    fn: maxBy(get('a')),
    toJS: true
});


compare({
    name: `maxBy() should maxBy an array with NaNs`,
    item: [
        {a: 3},
        {a: NaN},
        {a: NaN},
        {a: 4},
        {a: 4}
    ],
    fn: maxBy(get('a')),
    toJS: true
});

compare({
    name: `maxBy() should maxBy an empty item`,
    item: [],
    fn: maxBy(get('a'))
});

compare({
    name: `maxBy() should maxBy a single-child item`,
    item: [{a: "!"}],
    fn: maxBy(get('a')),
    toJS: true
});


compare({
    name: `maxBy() should maxBy an array with comparator`,
    item: [
        {a: 3},
        {a: 8},
        {a: 6},
        {a: 4},
        {a: 4}
    ],
    fn: maxBy(get('a'), (a, b) => {
        if(a < b) { return 1; }
        if(a > b) { return -1; }
        if(a === b) { return 0; }
    }),
    toJS: true
});

compare({
    name: `maxBy() should maxBy an object`,
    item: {
        a: {a: 3},
        b: {a: 8},
        c: {a: 6},
        d: {a: 4},
        e: {a: 4}
    },
    fn: maxBy(get('a')),
    toJS: true
});
