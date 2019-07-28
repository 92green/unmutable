// @flow
import prep from './internal/unmutable';
import pipeWith from './util/pipeWith';
import entryArray from './entryArray';

export default prep({
    n: 'reduce',
    i: 'reduce',
    a: (reducer: Function, ...initialReduction: *[]) => (value: Array<*>): * => {
        return initialReduction.length
            ? value.reduce(reducer, initialReduction[0])
            : value.reduce(reducer);
    },
    _: (reducer: Function, ...initialReduction: *[]) => (value: *): * => {
        let fn = (reduction, [key, childValue]) => reducer(reduction, childValue, key, value);
        return pipeWith(
            value,
            entryArray(),
            entries => {
                if(initialReduction.length) {
                    return entries.reduce(fn, initialReduction[0]);
                }
                return entries.length
                    ? entries.slice(1).reduce(fn, entries[0][1])
                    : undefined;
            }
        );
    }
});
