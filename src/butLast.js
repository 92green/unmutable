// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import del from './delete';
import keyArray from './keyArray';
import last from './last';
import pop from './pop';

let keyed = () => (value) => pipeWith(
    value,
    del(pipeWith(
        value,
        keyArray(),
        last()
    ))
);

export default prep({
    name: 'butLast',
    immutable: 'butLast',
    record: keyed,
    object: keyed,
    array: pop
});
