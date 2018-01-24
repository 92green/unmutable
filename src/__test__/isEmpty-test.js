// @flow
import isEmpty from '../isEmpty';
import compare from '../internal/compare';

compare({
    name: `isEmpty() should work on objects`,
    item: {a:1, b:2},
    fn: isEmpty()
});

compare({
    name: `isEmpty() should work on empty objects`,
    item: {},
    fn: isEmpty()
});

compare({
    name: `isEmpty() should work on arrays`,
    item: [1,2,3],
    fn: isEmpty()
});

compare({
    name: `isEmpty() should work on empty arrays`,
    item: [],
    fn: isEmpty()
});
