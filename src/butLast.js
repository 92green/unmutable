// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import del from './delete';
import keyArray from './keyArray';
import last from './last';
import pop from './pop';

export default prep({
    name: 'butLast',
    immutable: 'butLast',
    array: pop,
    all: () => (value) => pipeWith(
        value,
        del(pipeWith(
            value,
            keyArray(),
            last()
        ))
    )
});
