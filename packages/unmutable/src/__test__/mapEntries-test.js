// @flow
import mapEntries from '../mapEntries';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `mapEntries() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: mapEntries(([value, key]) => [key + "!", value * 2]),
    toJS: true,
    record: true,
    of: true
});

compareIteratee({
    name: `mapEntries() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => mapEntries((keyAndValue: *, index: *, iter: *): boolean => {
        checkArgs({keyAndValue, index, iter});
        return keyAndValue;
    }),
    argsToJS: ['iter']
});
