// @flow
import get from '../get';
import minBy from '../minBy';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `minBy() should minBy an array`,
    item: [
        {a: 3},
        {a: 8},
        {a: 6},
        {a: 4},
        {a: 4}
    ],
    fn: minBy(get('a')),
    toJS: true
});

compare({
    name: `minBy() should minBy an array with nulls`,
    item: [
        {a: 3},
        {a: null},
        {a: null},
        {a: 4},
        {a: 4}
    ],
    fn: minBy(get('a')),
    toJS: true
});

compare({
    name: `minBy() should minBy an array with undefineds`,
    item: [
        {a: 3},
        {a: undefined},
        {a: undefined},
        {a: 4},
        {a: 4}
    ],
    fn: minBy(get('a')),
    toJS: true
});


compare({
    name: `minBy() should minBy an array with NaNs`,
    item: [
        {a: 3},
        {a: NaN},
        {a: NaN},
        {a: 4},
        {a: 4}
    ],
    fn: minBy(get('a')),
    toJS: true
});

compare({
    name: `minBy() should minBy an empty item`,
    item: [],
    fn: minBy(get('a'))
});

compare({
    name: `minBy() should minBy a single-child item`,
    item: [{a: "!"}],
    fn: minBy(get('a')),
    toJS: true
});


compare({
    name: `minBy() should minBy an array with comparator`,
    item: [
        {a: 3},
        {a: 8},
        {a: 6},
        {a: 4},
        {a: 4}
    ],
    fn: minBy(get('a'), (a, b) => {
        if(a < b) { return 1; }
        if(a > b) { return -1; }
        if(a === b) { return 0; }
    }),
    toJS: true
});

compare({
    name: `minBy() should minBy an object`,
    item: {
        a: {a: 3},
        b: {a: 8},
        c: {a: 6},
        d: {a: 4},
        e: {a: 4}
    },
    fn: minBy(get('a')),
    toJS: true
});
