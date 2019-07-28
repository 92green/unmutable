// @flow
import prep from './internal/unmutable';
import pipeWith from './util/pipeWith';
import entryArray from './entryArray';
import set from './set'; // TODO - should be setMutate

export default prep({
    n: 'map',
    i: 'map',
    r: (mapper: Function) => (value: *): * => pipeWith(
        value,
        entryArray(),
        entries => entries.reduce((record, [key, childValue]) => record.set(key, mapper(childValue, key, record)), value)
    ),
    a: (mapper: Function) => (value: Array<*>): * => value.map(mapper),
    _: (mapper: Function) => (value: Object): * => pipeWith(
        value,
        entryArray(),
        entries => entries.reduce((reduction, [key, childValue]) => set(key, mapper(childValue, key, value))(reduction), value)
    )
});
