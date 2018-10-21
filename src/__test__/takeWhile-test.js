// @flow
import takeWhile from '../takeWhile';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `takeWhile() on object should take while predicate returns true`,
    item: {a:1, b:2, c:3, d:4},
    fn: takeWhile(value => value < 3),
    toJS: true
});

compare({
    name: `takeWhile() on object should take while predicate returns true`,
    item: [1,2,3,4],
    fn: takeWhile(value => value < 3),
    toJS: true
});

compareIteratee({
    name: `takeWhile() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => takeWhile((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});
