// @flow
import {Map, List} from 'immutable';
import mergeWith from '../mergeWith';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `mergeWith() object should mergeWith an object`,
    item: {a:1,b:2},
    fn: mergeWith((oldVal, newVal) => oldVal + newVal, {b:6,c:3}),
    toJS: true
});

compare({
    name: `mergeWith() object should mergeWith multiple objects`,
    item: {a:1,b:2},
    fn: mergeWith((oldVal, newVal) => oldVal + newVal, {b:6,c:3}, {c:4,e:7}),
    toJS: true
});

compare({
    name: `mergeWith() object should mergeWith objects and maps`,
    item: {a:1,b:2},
    fn: mergeWith((oldVal, newVal) => oldVal + newVal, {b:6,c:3}, Map({c:4,e:7})),
    toJS: true
});

compareIteratee({
    name: `mergeWith() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => mergeWith((oldVal: *, newVal: *, key: *): * => {
        checkArgs({oldVal, newVal, key});
        return true;
    }),
    argsToJS: ['oldVal', 'newVal']
});
