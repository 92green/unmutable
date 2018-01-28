// @flow
import findLast from '../findLast';
import compare from '../../internal/compare';
import compareIteratee from '../../internal/compareIteratee';

compare({
    name: `findLast() on object should findLast thing`,
    item: {a:1, b:2, c:3, d:4},
    fn: findLast(value => value > 2)
});

compare({
    name: `findLast() on object should not findLast thing that doesnt exist`,
    item: {a:1, b:2, c:3, d:4},
    fn: findLast(value => value > 6)
});

compare({
    name: `findLast() on object should not findLast thing that doesnt exist with notSetValue`,
    item: {a:1, b:2, c:3, d:4},
    fn: findLast(value => value > 6, null, 123)
});

compareIteratee({
    name: `findLast() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => findLast((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

compare({
    name: `findLast() on array should findLast thing`,
    item: [1,2,3,4],
    fn: findLast(value => value > 2)
});

compare({
    name: `findLast() on array should not findLast thing that doesnt exist`,
    item: [1,2,3,4],
    fn: findLast(value => value > 6)
});

compare({
    name: `findLast() on array should not findLast thing that doesnt exist with notSetValue`,
    item: [1,2,3,4],
    fn: findLast(value => value > 6, null, 123)
});


compareIteratee({
    name: `findLast() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => findLast((value: *, key: * /*, iter: * */): boolean => {
        checkArgs({value, key /*, iter */});
        // TODO: INVESTIGATE STRANGE BEHAVIOUR
        // Immutable.js does not pass the original iterable as iter to the predicate of List.findLast()
        // instead it passes a KeyedCollection
        // omit from test for now
        return true;
    }),
    argsToJS: ['iter']
});

