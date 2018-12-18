// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'reduceRight',
    immutable: 'reduceRight',
    object: (reducer: Function, initialReduction: *) => (value: Object): * => {
        return Object
            .keys(value)
            .reduceRight(
                (reduction, key) => reducer(reduction, value[key], key, value),
                initialReduction
            );
    },
    array: (reducer: Function, initialReduction: *) => (value: Array<*>): * => value.reduceRight(reducer, initialReduction)
});
