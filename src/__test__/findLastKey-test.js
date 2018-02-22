// @flow
import findLastKey from '../findLastKey';
import compare from '../internal/compare';
import compareIteratee from '../internal/compareIteratee';

compare({
    name: `findLastKey() on object should findLastKey thing`,
    item: {a:1, b:2, c:3, d:4},
    fn: findLastKey(value => value > 2)
});

compare({
    name: `findLastKey() on object should not findLastKey thing that doesnt exist`,
    item: {a:1, b:2, c:3, d:4},
    fn: findLastKey(value => value > 6)
});

compareIteratee({
    name: `findLastKey() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => findLastKey((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

compare({
    name: `findLastKey() on array should findLastKey thing`,
    item: [1,2,3,4],
    fn: findLastKey(value => value > 2)
});

compare({
    name: `findLastKey() on array should not findLastKey thing that doesnt exist`,
    item: [1,2,3,4],
    fn: findLastKey(value => value > 6)
});

compareIteratee({
    name: `findLastKey() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => findLastKey((value: *, key: * /*, iter: * */): boolean => {
        checkArgs({value, key /*, iter */});
        // TODO: INVESTIGATE STRANGE BEHAVIOUR
        // Immutable.js does not pass the original iterable as iter to the predicate of List.findLastKey()
        // instead it passes a KeyedCollection
        // omit from test for now
        return true;
    }),
    argsToJS: ['iter']
});
