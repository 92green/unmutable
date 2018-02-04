// @flow
import prep from '../internal/prep';

export default prep({
    immutable: 'reduceRight',
    object: (reducer: Function, initialReduction: *) => (item: Object): * => {
        return Object
            .keys(item)
            .reduceRight(
                (reduction, key) => reducer(reduction, item[key], key, item),
                initialReduction
            );
    },
    array: (reducer: Function, initialReduction: *) => (item: Array<*>): * => item.reduceRight(reducer, initialReduction)
});
