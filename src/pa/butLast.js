// @flow
import prep from '../internal/prep';
import pipeWith from '../util/pipeWith';
import del from './delete';
import keyArray from './keyArray';
import last from './last';
import pop from './pop';

export default prep({
    immutable: 'butLast',
    keyed: () => (item) => pipeWith(
        item,
        del(pipeWith(
            item,
            keyArray(),
            last()
        ))
    ),
    array: pop
});
