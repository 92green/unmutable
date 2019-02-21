// @flow
import findEntry from '../findEntry';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `findEntry() on object should findEntry thing`,
    item: {a:1, b:2, c:3, d:4},
    fn: findEntry(value => value > 2)
});

compare({
    name: `findEntry() on object should not findEntry thing that doesnt exist`,
    item: {a:1, b:2, c:3, d:4},
    fn: findEntry(value => value > 6)
});

compare({
    name: `findEntry() on object should not findEntry thing that doesnt exist with notSetValue`,
    item: {a:1, b:2, c:3, d:4},
    fn: findEntry(value => value > 6, null, 123)
});

compareIteratee({
    name: `findEntry() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => findEntry((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

compare({
    name: `findEntry() on array should findEntry thing`,
    item: [1,2,3,4],
    fn: findEntry(value => value > 2)
});

compare({
    name: `findEntry() on array should not findEntry thing that doesnt exist`,
    item: [1,2,3,4],
    fn: findEntry(value => value > 6)
});

compare({
    name: `findEntry() on array should not findEntry thing that doesnt exist with notSetValue`,
    item: [1,2,3,4],
    fn: findEntry(value => value > 6, null, 123)
});


compareIteratee({
    name: `findEntry() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => findEntry((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

