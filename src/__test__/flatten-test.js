// @flow
import flatten from '../flatten';
import set from '../set';
import push from '../push';
import compare from '../internal/__test__/compare-testutil';

let object = {
    a: {
        b: 12,
        c: {
            d: 234
        }
    },
    d: {
        aa: 56,
        f: 78
    },
    asdf: 234
};

compare({
    name: `flatten() on object should work with no arguments`,
    item: object,
    fn: flatten(),
    toJS: true
});

compare({
    name: `flatten() on object should work with false`,
    item: object,
    fn: flatten(false),
    toJS: true
});

compare({
    name: `flatten() on object should work with 0`,
    item: object,
    fn: flatten(0),
    toJS: true
});

compare({
    name: `flatten() on object should work with true`,
    item: object,
    fn: flatten(true),
    toJS: true
});

compare({
    name: `flatten() on object should work with 1`,
    item: object,
    fn: flatten(1),
    toJS: true
});

compare({
    name: `flatten() on object should work with 2`,
    item: object,
    fn: flatten(2),
    toJS: true
});

let array = [
    [1,2,[3,4]],
    3,
    [2]
];

compare({
    name: `flatten() on array should work with no arguments`,
    item: array,
    fn: flatten(),
    toJS: true
});

compare({
    name: `flatten() on array should work with false`,
    item: array,
    fn: flatten(false),
    toJS: true
});

compare({
    name: `flatten() on array should work with 0`,
    item: array,
    fn: flatten(0),
    toJS: true
});

compare({
    name: `flatten() on array should work with true`,
    item: array,
    fn: flatten(true),
    toJS: true
});

compare({
    name: `flatten() on array should work with 1`,
    item: array,
    fn: flatten(1),
    toJS: true
});

compare({
    name: `flatten() on array should work with 2`,
    item: array,
    fn: flatten(2),
    toJS: true
});
