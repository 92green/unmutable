// @flow
import prep from './internal/unmutable';
import pipeWith from './util/pipeWith';
import deleteMutate from './deleteMutate';
import entryArray from './entryArray';
import clone from './clone';

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
        entries => entries.reduce(
            (reduction, [key, childValue]) => {
                return predicate(childValue, key, value)
                    ? reduction
                    : deleteMutate(key)(reduction);
            },
            clone()(value)
        )
    ),
    ap: true,
    of: true
});
