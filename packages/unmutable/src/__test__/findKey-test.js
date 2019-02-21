// @flow
import findKey from '../findKey';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `findKey() on object should findKey thing`,
    item: {a:1, b:2, c:3, d:4},
    fn: findKey(value => value > 2)
});

compare({
    name: `findKey() on object should not findKey thing that doesnt exist`,
    item: {a:1, b:2, c:3, d:4},
    fn: findKey(value => value > 6)
});

compareIteratee({
    name: `findKey() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => findKey((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

compare({
    name: `findKey() on array should findKey thing`,
    item: [1,2,3,4],
    fn: findKey(value => value > 2)
});

compare({
    name: `findKey() on array should not findKey thing that doesnt exist`,
    item: [1,2,3,4],
    fn: findKey(value => value > 6)
});

compareIteratee({
    name: `findKey() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => findKey((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

