// @flow
import skipLast from '../skipLast';
import compare from '../../internal/compare';

compare({
    name: `skipLast() should skipLast an object with 0`,
    item: {a:1,b:2,c:3},
    fn: skipLast(0),
    toJS: true
});

compare({
    name: `skipLast() should skipLast an object with 1`,
    item: {a:1,b:2,c:3},
    fn: skipLast(1),
    toJS: true
});

compare({
    name: `skipLast() should skipLast an object with 2`,
    item: {a:1,b:2,c:3},
    fn: skipLast(2),
    toJS: true
});

compare({
    name: `skipLast() should skipLast an object with too many`,
    item: {a:1,b:2,c:3},
    fn: skipLast(10),
    toJS: true
});

compare({
    name: `skipLast() should skipLast an array with 0`,
    item: [1,2,3],
    fn: skipLast(0),
    toJS: true
});

compare({
    name: `skipLast() should skipLast an array with 1`,
    item: [1,2,3],
    fn: skipLast(1),
    toJS: true
});

compare({
    name: `skipLast() should skipLast an array with 2`,
    item: [1,2,3],
    fn: skipLast(2),
    toJS: true
});

compare({
    name: `skipLast() should skipLast an array with too many`,
    item: [1,2,3],
    fn: skipLast(10),
    toJS: true
});

