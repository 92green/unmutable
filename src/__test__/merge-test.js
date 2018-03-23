// @flow
import merge from '../merge';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `merge() object should merge an object`,
    item: {a:1,b:2},
    fn: merge({b:6,c:3}),
    toJS: true
});

compare({
    name: `merge() array should merge an array`,
    item: [1,2,3],
    fn: merge([4,5,6]),
    toJS: true
});
