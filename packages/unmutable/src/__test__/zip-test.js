// @flow
import zip from '../zip';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `zip() should do its thing`,
    item: [1,2,3],
    fn: zip([4,5,6]),
    toJS: true
});

compare({
    name: `zip() should do its thing with different array lengths`,
    item: [1,2,3,4,5],
    fn: zip([6,7,8]),
    toJS: true
});

compare({
    name: `zip() should do its thing with multiple arrays`,
    item: [1,2,3],
    fn: zip([6,7,8],[9,10,11,12,13]),
    toJS: true
});
