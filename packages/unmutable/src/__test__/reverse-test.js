// @flow
import reverse from '../reverse';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `reverse() should reverse an item`,
    item: [1,2,3],
    fn: reverse(),
    toJS: true
});
