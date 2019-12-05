// @flow
import skipUntil from '../skipUntil';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `skipUntil() on object should skip until predicate returns true`,
    item: {a:1, b:2, c:3, d:4},
    fn: skipUntil(value => value > 2),
    toJS: true,
    of: true
});

compare({
    name: `skipUntil() on object should skip all if predicate never returns true`,
    item: {a:1, b:2, c:3, d:4},
    fn: skipUntil(value => value > 6),
    toJS: true,
    of: true
});

compare({
    name: `skipUntil() on array should skip until predicate returns true`,
    item: [1,2,3,4],
    fn: skipUntil(value => value > 2),
    toJS: true,
    of: true
});

compare({
    name: `skipUntil() on array should skip all if predicate never returns true`,
    item: [1,2,3,4],
    fn: skipUntil(value => value > 6),
    toJS: true,
    of: true
});

compareIteratee({
    name: `skipUntil() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => skipUntil((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return false;
    }),
    argsToJS: ['iter']
});
