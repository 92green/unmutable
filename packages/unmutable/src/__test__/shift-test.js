// @flow
import shift from '../shift';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `shift() should do its thing`,
    item: [1,2,3],
    fn: shift(),
    toJS: true,
    of: true
});

compare({
    name: `shift() should do its thing on empty`,
    item: [],
    fn: shift(),
    toJS: true,
    of: true
});
