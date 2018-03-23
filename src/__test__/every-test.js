// @flow
import every from '../every';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `every() on object should identify false result`,
    item: {a:1, b:2, c:3, d:4},
    fn: every(value => value < 4)
});

compare({
    name: `every() on object should identify true result`,
    item: {a:1, b:2, c:3, d:4},
    fn: every(value => value < 6)
});

compareIteratee({
    name: `every() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => every((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

compare({
    name: `every() on array should identify false result`,
    item: [1,2,3,4],
    fn: every(value => value < 4)
});

compare({
    name: `every() on array should identify true result`,
    item: [1,2,3,4],
    fn: every(value => value < 6)
});

compareIteratee({
    name: `every() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => every((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

