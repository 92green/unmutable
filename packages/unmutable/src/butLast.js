// @flow
import prep from './internal/unmutable';
import pipeWith from './util/pipeWith';
import del from './delete';
import keyArray from './keyArray';
import last from './last';
import pop from './pop';

export default prep({
    n: 'butLast',
    i: 'butLast',
    a: pop,
    _: () => (value) => pipeWith(
        value,
        del(pipeWith(
            value,
            keyArray(),
            last()
        ))
    )
});
