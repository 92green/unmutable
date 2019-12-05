// @flow
import interpose from '../interpose';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `interpose() should do its thing`,
    item: [1,2,3],
    fn: interpose(0),
    toJS: true,
    of: true
});

compare({
    name: `interpose() should do its thing on empty`,
    item: [],
    fn: interpose(),
    toJS: true,
    of: true
});
