// @flow
import has from '../has';
import compare from '../../internal/compare';

compare({
    name: `has() finds a key`,
    item: {a:1, b:2},
    fn: has('a')
});

compare({
    name: `has() doesnt find a key`,
    item: {a:1, b:2},
    fn: has('c')
});

compare({
    name: `has() finds an index`,
    item: [1,2,3],
    fn: has(2)
});

compare({
    name: `has() finds a negative index`,
    item: [1,2,3],
    fn: has(-1)
});

compare({
    name: `has() doesnt find an index`,
    item: [1,2,3],
    fn: has(3)
});
