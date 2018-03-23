// @flow
import reduceRight from '../reduceRight';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `reduceRight() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: reduceRight((reduction, value) => [...reduction, value], [])
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

compareIteratee({
    name: `reduceRight() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => reduceRight((reduction: *, value: *, key: *, iter: *): Array<*> => {
        checkArgs({reduction, value, key, iter});
        return [value, ...reduction];
    }, []),
    argsToJS: ['iter']
});

