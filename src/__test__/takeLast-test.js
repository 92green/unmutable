// @flow
import takeLast from '../takeLast';
import compare from '../internal/compare';

compare({
    name: `takeLast() should takeLast an object with 0`,
    item: {a:1,b:2,c:3},
    fn: takeLast(0),
    toJS: true
});

compare({
    name: `takeLast() should takeLast an object with 1`,
    item: {a:1,b:2,c:3},
    fn: takeLast(1),
    toJS: true
});

compare({
    name: `takeLast() should takeLast an object with 2`,
    item: {a:1,b:2,c:3},
    fn: takeLast(2),
    toJS: true
});

compare({
    name: `takeLast() should takeLast an object with too many`,
    item: {a:1,b:2,c:3},
    fn: takeLast(10),
    toJS: true
});

compare({
    name: `takeLast() should takeLast an array with 0`,
    item: [1,2,3],
    fn: takeLast(0),
    toJS: true
});

compare({
    name: `takeLast() should takeLast an array with 1`,
    item: [1,2,3],
    fn: takeLast(1),
    toJS: true
});

compare({
    name: `takeLast() should takeLast an array with 2`,
    item: [1,2,3],
    fn: takeLast(2),
    toJS: true
});

compare({
    name: `takeLast() should takeLast an array with too many`,
    item: [1,2,3],
    fn: takeLast(10),
    toJS: true
});

