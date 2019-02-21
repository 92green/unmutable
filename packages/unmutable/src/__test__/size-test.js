// @flow
import size from '../size';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `size() should work on objects`,
    item: {a:1, b:2},
    fn: size()
});

compare({
    name: `size() should work on empty objects`,
    item: {},
    fn: size()
});

compare({
    name: `size() should work on arrays`,
    item: [1,2,3],
    fn: size()
});

compare({
    name: `size() should work on empty arrays`,
    item: [],
    fn: size()
});
