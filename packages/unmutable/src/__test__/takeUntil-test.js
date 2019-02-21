// @flow
import takeUntil from '../takeUntil';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `takeUntil() on object should take until predicate returns true`,
    item: {a:1, b:2, c:3, d:4},
    fn: takeUntil(value => value > 2),
    toJS: true
});

compare({
    name: `takeUntil() on object should take all if predicate never returns true`,
    item: {a:1, b:2, c:3, d:4},
    fn: takeUntil(value => value > 6),
    toJS: true
});

compare({
    name: `takeUntil() on array should take until predicate returns true`,
    item: [1,2,3,4],
    fn: takeUntil(value => value > 2),
    toJS: true
});

compare({
    name: `takeUntil() on array should take all if predicate never returns true`,
    item: [1,2,3,4],
    fn: takeUntil(value => value > 6),
    toJS: true
});

compareIteratee({
    name: `takeUntil() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => takeUntil((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return false;
    }),
    argsToJS: ['iter']
});
