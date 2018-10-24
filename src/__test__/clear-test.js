// @flow
import clear from '../clear';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `clear() works on objects`,
    item: {a:1, b:2},
    fn: clear(),
    toJS: true,
    unmutableCompatible: true
});

compare({
    name: `clear() works on arrays`,
    item: [1,2,3],
    fn: clear(),
    toJS: true
});
