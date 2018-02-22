// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import entryArray from './entryArray';
import reduce from './reduce';


export default prep({
    immutable: 'reduce',
    record: (reducer: Function, initialReduction: *) => (item: *): * => pipeWith(
        item,
        entryArray(),
        reduce((reduction, [key, value]) => reducer(reduction, value, key, item), initialReduction)
    ),
    object: (reducer: Function, initialReduction: *) => (item: Object): * => {
        return Object
            .keys(item)
            .reduce(
                (reduction, key) => reducer(reduction, item[key], key, item),
                initialReduction
            );
    },
    array: (reducer: Function, initialReduction: *) => (item: Array<*>): * => item.reduce(reducer, initialReduction)
});
