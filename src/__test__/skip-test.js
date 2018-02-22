// @flow
import skip from '../skip';
import compare from '../internal/compare';

compare({
    name: `skip() should skip an object with 0`,
    item: {a:1,b:2,c:3},
    fn: skip(0),
    toJS: true
});

compare({
    name: `skip() should skip an object with 1`,
    item: {a:1,b:2,c:3},
    fn: skip(1),
    toJS: true
});

compare({
    name: `skip() should skip an object with 2`,
    item: {a:1,b:2,c:3},
    fn: skip(2),
    toJS: true
});

compare({
    name: `skip() should skip an object with too many`,
    item: {a:1,b:2,c:3},
    fn: skip(10),
    toJS: true
});

compare({
    name: `skip() should skip an array with 0`,
    item: [1,2,3],
    fn: skip(0),
    toJS: true
});

compare({
    name: `skip() should skip an array with 1`,
    item: [1,2,3],
    fn: skip(1),
    toJS: true
});

compare({
    name: `skip() should skip an array with 2`,
    item: [1,2,3],
    fn: skip(2),
    toJS: true
});

compare({
    name: `skip() should skip an array with too many`,
    item: [1,2,3],
    fn: skip(10),
    toJS: true
});

