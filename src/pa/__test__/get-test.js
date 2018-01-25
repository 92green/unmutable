// @flow
import get from '../get';
import compare from '../../internal/compare';

compare({
    name: `get() finds a value`,
    item: {a:1, b:2},
    fn: get('a')
});

compare({
    name: `get() doesnt find a value`,
    item: {a:1, b:2},
    fn: get('c')
});

compare({
    name: `get() doesnt find a value with a notSetValue`,
    item: {a:1, b:2},
    fn: get('c', '!')
});

compare({
    name: `get() finds an index`,
    item: [1,2,3],
    fn: get(2)
});

compare({
    name: `get() finds a negative index`,
    item: [1,2,3],
    fn: get(-1)
});

compare({
    name: `get() doesnt find an index`,
    item: [1,2,3],
    fn: get(3)
});

compare({
    name: `get() finds a negative index with a notSetValue`,
    item: [1,2,3],
    fn: get(-1, '!')
});

compare({
    name: `get() doesnt find an index with a notSetValue`,
    item: [1,2,3],
    fn: get(3, '!')
});
