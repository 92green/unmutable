// @flow
import forEach from '../forEach';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `forEach() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: forEach(() => {})
});

compare({
    name: `forEach() on object should bail if false is returned`,
    item: {a:1, b:2, c:3, d:4},
    fn: forEach((value) => value < 3)
});

compare({
    name: `forEach() on array should work`,
    item: [1,2,3,4],
    fn: forEach(() => {})
});

compare({
    name: `forEach() on array should bail if false is returned`,
    item: [1,2,3,4],
    fn: forEach((value) => value < 3)
});

compareIteratee({
    name: `forEach() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => forEach((value: *, key: *, iter: *): * => {
        checkArgs({value, key, iter});
    }),
    argsToJS: ['iter']
});

