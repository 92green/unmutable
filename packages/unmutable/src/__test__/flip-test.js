// @flow
import flip from '../flip';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `flip() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: flip(),
    toJS: true,
    record: true
});
