// @flow
import prep from './internal/unmutable';
import pipeWith from './util/pipeWith';
import entryArray from './entryArray';

export default prep({
    name: 'reduceRight',
    immutable: 'reduceRight',
    array: (reducer: Function, ...initialReduction: *[]) => (value: Array<*>): * => {
        return initialReduction.length
            ? value.reduceRight(reducer, initialReduction[0])
            : value.reduceRight(reducer);
    },
    all: (reducer: Function, ...initialReduction: *[]) => (value: *): * => {
        let fn = (reduction, [key, childValue]) => reducer(reduction, childValue, key, value);
        return pipeWith(
            value,
            entryArray(),
            entries => {
                if(initialReduction.length) {
                    return entries.reduceRight(fn, initialReduction[0]);
                }
                return entries.length
                    ? entries.slice(0,-1).reduceRight(fn, entries[entries.length - 1][1])
                    : undefined;
            }
        );
    }
});
