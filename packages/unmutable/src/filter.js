// @flow
import prep from './internal/unmutable';
import pipeWith from './util/pipeWith';
import del from './delete'; // TODO - should be deleteMutate
import entryArray from './entryArray';

export default prep({
    n: 'filter',
    i: 'filter',
    r: (predicate: Function) => (value: *): * => pipeWith(
        value,
        entryArray(),
        entries => entries.reduce((record, [key, childValue]) => predicate(childValue, key, record) ? record : record.delete(key), value)
    ),
    a: (predicate: Function) => (value: Array<*>): * => value.filter(predicate),
    _: (predicate: Function) => (value: *): * => pipeWith(
        value,
        entryArray(),
        entries => entries.reduce((reduction, [key, childValue]) => predicate(childValue, key, value) ? reduction : del(key)(reduction), value)
    )
});
