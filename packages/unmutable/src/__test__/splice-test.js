// @flow
import splice from '../splice';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `splice() should splice`,
    item: ['a', 'b', 'c', 'd'],
    fn: splice(1, 2, 'q', 'r', 's'),
    toJS: true,
    of: true
});


compare({
    name: `splice() should splice without adding`,
    item: ['a', 'b', 'c', 'd'],
    fn: splice(1, 2),
    toJS: true,
    of: true
});

compare({
    name: `splice() should splice negatively`,
    item: ['a', 'b', 'c', 'd'],
    fn: splice(-1, 0 ,'e'),
    toJS: true,
    of: true
});
