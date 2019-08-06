// @flow
import mapKeys from '../mapKeys';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `mapKeys() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: mapKeys(key => key + "!"),
    toJS: true,
    record: true
});

compareIteratee({
    name: `mapKeys() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => mapKeys((key: *, value: *, iter: *): boolean => {
        checkArgs({key, value, iter});
        return key;
    }),
    argsToJS: ['iter']
});
