// @flow
import skipWhile from '../skipWhile';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `skipWhile() on object should skip while predicate returns true`,
    item: {a:1, b:2, c:3, d:4},
    fn: skipWhile(value => value < 3),
    of: true,
    toJS: true
});

compare({
    name: `skipWhile() on object should skip while predicate returns true`,
    item: [1,2,3,4],
    fn: skipWhile(value => value < 3),
    of: true,
    toJS: true
});

compareIteratee({
    name: `skipWhile() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => skipWhile((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter'],
    of: true
});
