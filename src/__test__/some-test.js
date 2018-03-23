// @flow
import some from '../some';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `some() on object should identify false result`,
    item: {a:1, b:2, c:3, d:4},
    fn: some(value => value > 6)
});

compare({
    name: `some() on object should identify true result`,
    item: {a:1, b:2, c:3, d:4},
    fn: some(value => value > 3)
});

compareIteratee({
    name: `some() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => some((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

compare({
    name: `some() on array should identify false result`,
    item: [1,2,3,4],
    fn: some(value => value > 6)
});

compare({
    name: `some() on array should identify true result`,
    item: [1,2,3,4],
    fn: some(value => value > 3)
});

compareIteratee({
    name: `some() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => some((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

