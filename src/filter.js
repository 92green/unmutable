// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import del from './delete'; // TODO - should be deleteMutate
import entryArray from './entryArray';

export default prep({
    name: 'filter',
    immutable: 'filter',
    record: (predicate: Function) => (value: *): * => pipeWith(
        value,
        entryArray(),
        entries => entries.reduce((record, [key, childValue]) => predicate(childValue, key, record) ? record : record.delete(key), value)
    ),
    array: (predicate: Function) => (value: Array<*>): * => value.filter(predicate),
    all: (predicate: Function) => (value: *): * => pipeWith(
        value,
        entryArray(),
        entries => entries.reduce((reduction, [key, childValue]) => predicate(childValue, key, value) ? reduction : del(key)(reduction), value)
    )
});
