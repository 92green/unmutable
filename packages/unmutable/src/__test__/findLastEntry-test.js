// @flow
import findLastEntry from '../findLastEntry';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `findLastEntry() on object should findLastEntry thing`,
    item: {a:1, b:2, c:3, d:4},
    fn: findLastEntry(value => value > 2)
});

compare({
    name: `findLastEntry() on object should not findLastEntry thing that doesnt exist`,
    item: {a:1, b:2, c:3, d:4},
    fn: findLastEntry(value => value > 6)
});

compare({
    name: `findLastEntry() on object should not findLastEntry thing that doesnt exist with notSetValue`,
    item: {a:1, b:2, c:3, d:4},
    fn: findLastEntry(value => value > 6, null, 123)
});

compareIteratee({
    name: `findLastEntry() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => findLastEntry((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

compare({
    name: `findLastEntry() on array should findLastEntry thing`,
    item: [1,2,3,4],
    fn: findLastEntry(value => value > 2)
});

compare({
    name: `findLastEntry() on array should not findLastEntry thing that doesnt exist`,
    item: [1,2,3,4],
    fn: findLastEntry(value => value > 6)
});

compare({
    name: `findLastEntry() on array should not findLastEntry thing that doesnt exist with notSetValue`,
    item: [1,2,3,4],
    fn: findLastEntry(value => value > 6, null, 123)
});

compareIteratee({
    name: `findLastEntry() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => findLastEntry((value: *, key: * /*, iter: * */): boolean => {
        checkArgs({value, key /*, iter */});
        // TODO: INVESTIGATE STRANGE BEHAVIOUR
        // Immutable.js does not pass the original iterable as iter to the predicate of List.findLastEntry()
        // instead it passes a KeyedCollection
        // omit from test for now
        return true;
    }),
    argsToJS: ['iter']
});

