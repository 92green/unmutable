// @flow
import splice from '../splice';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `splice() should splice an array`,
    item: ['a', 'b', 'c', 'd'],
    fn: splice(1, 2, 'q', 'r', 's'),
    toJS: true
});
