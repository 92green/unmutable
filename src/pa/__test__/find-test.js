// @flow
import find from '../find';
import compare from '../../internal/compare';
import compareIteratee from '../../internal/compareIteratee';

compare({
    name: `find() on object should find thing`,
    item: {a:1, b:2, c:3, d:4},
    fn: find(value => value > 2)
});

compare({
    name: `find() on object should not find thing that doesnt exist`,
    item: {a:1, b:2, c:3, d:4},
    fn: find(value => value > 6)
});

compare({
    name: `find() on object should not find thing that doesnt exist with notSetValue`,
    item: {a:1, b:2, c:3, d:4},
    fn: find(value => value > 6, null, 123)
});

compareIteratee({
    name: `find() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => find((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

compare({
    name: `find() on array should find thing`,
    item: [1,2,3,4],
    fn: find(value => value > 2)
});

compare({
    name: `find() on array should not find thing that doesnt exist`,
    item: [1,2,3,4],
    fn: find(value => value > 6)
});

compare({
    name: `find() on array should not find thing that doesnt exist with notSetValue`,
    item: [1,2,3,4],
    fn: find(value => value > 6, null, 123)
});


compareIteratee({
    name: `find() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => find((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

