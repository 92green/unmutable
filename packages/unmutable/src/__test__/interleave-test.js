// @flow
import interleave from '../interleave';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `interleave() should do its thing`,
    item: [1,2,3],
    fn: interleave([4,5,6], [7,8,9]),
    toJS: true
});
