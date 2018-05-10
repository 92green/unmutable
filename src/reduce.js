// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import entryArray from './entryArray';
import reduce from './reduce';


export default prep({
    name: 'reduce',
    immutable: 'reduce',
    record: (reducer: Function, initialReduction: *) => (value: *): * => pipeWith(
        value,
        entryArray(),
        reduce((reduction, [key, childValue]) => reducer(reduction, childValue, key, value), initialReduction)
    ),
    object: (reducer: Function, initialReduction: *) => (value: Object): * => {
        return Object
            .keys(value)
            .reduce(
                (reduction, key) => reducer(reduction, value[key], key, value),
                initialReduction
            );
    },
    array: (reducer: Function, initialReduction: *) => (value: Array<*>): * => value.reduce(reducer, initialReduction)
});
