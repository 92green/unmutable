// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import del from './delete';
import shift from './shift';
import keys from './keys';

export default prep({
    name: 'rest',
    immutable: 'rest',
    array: shift,
    all: () => (value) => pipeWith(
        value,
        del(keys()(value).next().value)
    )
});
