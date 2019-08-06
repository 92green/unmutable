// @flow
import prep from './internal/unmutable';
import pipeWith from './util/pipeWith';
import entryArray from './entryArray';
import setMutate from './setMutate';
import clear from './clear';

export default prep({
    name: 'mapEntries',
    immutable: 'mapEntries',
    all: (mapper: Function) => (value: Object): * => pipeWith(
        value,
        entryArray(),
        entries => entries.reduce(
            (reduction, keyAndValue, index) => {
                let [newKey, newValue] = mapper(keyAndValue, index, value);
                return setMutate(newKey, newValue)(reduction);
            },
            clear()(value)
        )
    )
});
