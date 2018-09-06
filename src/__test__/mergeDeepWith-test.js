// @flow
import {Map, List} from 'immutable';
import mergeDeepWith from '../mergeDeepWith';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `mergeDeepWith() object should mergeDeepWith an object`,
    item: {a:1,b:2},
    fn: mergeDeepWith((oldVal, newVal) => oldVal + newVal, {b:6,c:3}),
    toJS: true
});

compare({
    name: `mergeDeepWith() object should mergeDeepWith multiple objects`,
    item: {a:1,b:2},
    fn: mergeDeepWith((oldVal, newVal) => oldVal + newVal, {b:6,c:3}, {c:4,e:7}),
    toJS: true
});

compare({
    name: `mergeDeepWith() object should mergeDeepWith objects and maps`,
    item: {a:1,b:2},
    fn: mergeDeepWith((oldVal, newVal) => oldVal + newVal, {b:6,c:3}, Map({c:4,e:7})),
    toJS: true
});

compareIteratee({
    name: `mergeDeepWith() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => mergeDeepWith((oldVal: *, newVal: *, key: *): * => {
        checkArgs({oldVal, newVal, key});
        return true;
    }),
    argsToJS: ['oldVal', 'newVal']
});

compare({
    name: `mergeDeepWith() object should mergeDeepWith a deep object`,
    item: {a:{z:123},b:2},
    fn: mergeDeepWith((oldVal, newVal) => oldVal + newVal, {a:{z:123},b:6,c:3}),
    toJS: true
});

compare({
    name: `mergeDeepWith() object should mergeDeepWith a deep array`,
    item: {a:[1,2,3]},
    fn: mergeDeepWith((oldVal, newVal) => oldVal + newVal, {a:[4,5,6]}),
    toJS: true
});
