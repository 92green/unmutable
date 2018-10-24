// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import entryArray from './entryArray';
import set from './set'; // TODO - should be setMutate

export default prep({
    name: 'map',
    immutable: 'map',
    record: (mapper: Function) => (value: *): * => pipeWith(
        value,
        entryArray(),
        entries => entries.reduce((record, [key, childValue]) => record.set(key, mapper(childValue, key, record)), value)
    ),
    array: (mapper: Function) => (value: Array<*>): * => value.map(mapper),
    all: (mapper: Function) => (value: Object): * => pipeWith(
        value,
        entryArray(),
        entries => entries.reduce((reduction, [key, childValue]) => set(key, mapper(childValue, key, value))(reduction), value)
    )
});
