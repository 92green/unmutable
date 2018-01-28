// @flow
import take from '../take';
import compare from '../../internal/compare';

compare({
    name: `take() should take an object with 0`,
    item: {a:1,b:2,c:3},
    fn: take(0),
    toJS: true
});

compare({
    name: `take() should take an object with 1`,
    item: {a:1,b:2,c:3},
    fn: take(1),
    toJS: true
});

compare({
    name: `take() should take an object with 2`,
    item: {a:1,b:2,c:3},
    fn: take(2),
    toJS: true
});

compare({
    name: `take() should take an object with too many`,
    item: {a:1,b:2,c:3},
    fn: take(10),
    toJS: true
});

compare({
    name: `take() should take an array with 0`,
    item: [1,2,3],
    fn: take(0),
    toJS: true
});

compare({
    name: `take() should take an array with 1`,
    item: [1,2,3],
    fn: take(1),
    toJS: true
});

compare({
    name: `take() should take an array with 2`,
    item: [1,2,3],
    fn: take(2),
    toJS: true
});

compare({
    name: `take() should take an array with too many`,
    item: [1,2,3],
    fn: take(10),
    toJS: true
});

