// @flow
import zipWith from '../zipWith';
import compare from '../internal/compare';
import compareIteratee from '../internal/compareIteratee';

compare({
    name: `zipWith() should do its thing`,
    item: [1,2,3],
    fn: zipWith((a, b) => a + b, [4,5,6]),
    toJS: true
});

compare({
    name: `zipWith() should do its thing with different array lengths`,
    item: [1,2,3,4,5],
    fn: zipWith((a, b) => a + b, [6,7,8]),
    toJS: true
});

compare({
    name: `zipWith() should do its thing with multiple arrays`,
    item: [1,2,3],
    fn: zipWith((a, b, c) => a + b + c, [6,7,8],[9,10,11,12,13]),
    toJS: true
});

compareIteratee({
    name: `zipWith() should pass correct arguments to iteratee`,
    item: [1,2,3],
    fn: (checkArgs) => zipWith(
        (a: *, b: *, c: *): boolean => {
            checkArgs({a, b, c});
            return a + b + c;
        },
        [6,7,8],[9,10,11,12,13]
    )
});
