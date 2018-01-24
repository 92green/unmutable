// @flow
import filterNot from '../filterNot';
import compare from '../internal/compare';
import compareIteratee from '../internal/compareIteratee';

compare({
    name: `filterNot() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: filterNot(value => value % 2 === 0),
    toJS: true
});

compareIteratee({
    name: `filterNot() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => filterNot((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

compare({
    name: `filterNot() on array should work`,
    item: [1,2,3,4],
    fn: filterNot(value => value % 2 === 0),
    toJS: true
});

compareIteratee({
    name: `filterNot() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => filterNot((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

