// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import del from './delete';
import first from './first';
import shift from './shift';

export default prep({
    name: 'rest',
    immutable: 'rest',
    object: () => (value) => pipeWith(
        value,
        del(pipeWith(
            Object.keys(value),
            first()
        ))
    ),
    array: shift
});
