// @flow
import pop from '../pop';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `pop() should do its thing`,
    item: [1,2,3],
    fn: pop(),
    toJS: true,
    of: true
});

compare({
    name: `pop() should do its thing on empty`,
    item: [],
    fn: pop(),
    toJS: true,
    of: true
});
