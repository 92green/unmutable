// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import entryArray from './entryArray';

export default prep({
    name: 'reduce',
    immutable: 'reduce',
    array: (reducer: Function, initialReduction: *) => (value: Array<*>): * => value.reduce(reducer, initialReduction),
    all: (reducer: Function, initialReduction: *) => (value: *): * => pipeWith(
        value,
        entryArray(),
        entries => entries.reduce((reduction, [key, childValue]) => reducer(reduction, childValue, key, value), initialReduction)
    )
});
