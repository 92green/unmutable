// @flow
import findIndex from '../findIndex';
import compare from '../internal/compare';
import compareIteratee from '../internal/compareIteratee';

compare({
    name: `findIndex() on array should findIndex thing`,
    item: [1,2,3,4],
    fn: findIndex(value => value > 2)
});

compare({
    name: `findIndex() on array should not findIndex thing that doesnt exist`,
    item: [1,2,3,4],
    fn: findIndex(value => value > 6)
});

compareIteratee({
    name: `findIndex() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => findIndex((value: *, key: * /*, iter: * */): boolean => {
        checkArgs({value, key /*, iter */});
        // TODO: INVESTIGATE STRANGE BEHAVIOUR
        // Immutable.js does not pass the original iterable as iter to the predicate of List.findIndex()
        // instead it passes a KeyedCollection
        // omit from test for now
        return true;
    }),
    argsToJS: ['iter']
});
