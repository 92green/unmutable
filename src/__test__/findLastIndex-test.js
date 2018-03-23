// @flow
import findLastIndex from '../findLastIndex';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `findLastIndex() on array should findLastIndex thing`,
    item: [1,2,3,4],
    fn: findLastIndex(value => value > 2)
});

compare({
    name: `findLastIndex() on array should not findLastIndex thing that doesnt exist`,
    item: [1,2,3,4],
    fn: findLastIndex(value => value > 6)
});

compareIteratee({
    name: `findLastIndex() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => findLastIndex((value: *, key: * /*, iter: * */): boolean => {
        checkArgs({value, key /*, iter */});
        // TODO: INVESTIGATE STRANGE BEHAVIOUR
        // Immutable.js does not pass the original iterable as iter to the predicate of List.findLastIndex()
        // instead it passes a KeyedCollection
        // omit from test for now
        return true;
    }),
    argsToJS: ['iter']
});
