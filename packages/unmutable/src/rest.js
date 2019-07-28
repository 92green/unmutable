// @flow
import prep from './internal/unmutable';
import pipeWith from './util/pipeWith';
import del from './delete';
import shift from './shift';
import keys from './keys';

export default prep({
    n: 'rest',
    i: 'rest',
    a: shift,
    _: () => (value) => pipeWith(
        value,
        del(keys()(value).next().value)
    )
});
