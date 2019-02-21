// @flow
import setSize from '../setSize';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `setSize() should shorten arrays`,
    item: [1,2,3],
    fn: setSize(2),
    toJS: true
});

compare({
    name: `setSize() should empty arrays`,
    item: [1,2,3],
    fn: setSize(0),
    toJS: true
});

compare({
    name: `setSize() should same arrays`,
    item: [1,2,3],
    fn: setSize(3),
    toJS: true
});

compare({
    name: `setSize() should lengthen arrays`,
    item: [1,2,3],
    fn: setSize(5),
    toJS: true
});
