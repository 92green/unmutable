// @flow
import count from '../count';
import compare from '../internal/compare';

compare({
    name: `count() should work on objects`,
    item: {a:1, b:2},
    fn: count()
});

compare({
    name: `count() should work on empty objects`,
    item: {},
    fn: count()
});

compare({
    name: `count() should work on arrays`,
    item: [1,2,3],
    fn: count()
});

compare({
    name: `count() should work on empty arrays`,
    item: [],
    fn: count()
});
