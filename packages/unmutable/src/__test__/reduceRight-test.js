// @flow
import reduceRight from '../reduceRight';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `reduceRight() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: reduceRight((reduction, value) => [...reduction, value], [])
});

compare({
    name: `reduceRight() on object should work when only one item`,
    item: {a:1},
    fn: reduceRight((reduction, value) => [...reduction, value], [])
});


compare({
    name: `reduceRight() on object should work when empty`,
    item: {},
    fn: reduceRight((reduction, value) => [...reduction, value], [])
});


compare({
    name: `reduceRight() on object should work without initial reduction`,
    item: {a:1, b:2, c:3, d:4},
    fn: reduceRight((a, b) => a - b)
});

compare({
    name: `reduceRight() on object should work without initial reduction when only one item`,
    item: {a:1},
    fn: reduceRight((a, b) => a - b)
});

compare({
    name: `reduceRight() on object should work without initial reduction when empty`,
    item: {},
    fn: reduceRight((a, b) => a - b)
});

compareIteratee({
    name: `reduceRight() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => reduceRight((reduction: *, value: *, key: *, iter: *): Array<*> => {
        checkArgs({reduction, value, key, iter});
        return [...reduction, value];
    }, []),
    argsToJS: ['iter']
});

compare({
    name: `reduceRight() on array should work`,
    item:[1,2,3,4],
    fn: reduceRight((reduction, value) => [value, ...reduction], [])
});

compare({
    name: `reduceRight() on array should work without initial reduction`,
    item:[1,2,3,4],
    fn: reduceRight((a, b) => a - b)
});

compareIteratee({
    name: `reduceRight() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => reduceRight((reduction: *, value: *, key: *, iter: *): Array<*> => {
        checkArgs({reduction, value, key, iter});
        return [value, ...reduction];
    }, []),
    argsToJS: ['iter']
});

