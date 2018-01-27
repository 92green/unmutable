// @flow
import prep from '../internal/prep';
import pipeWith from '../util/pipeWith';
import del from './delete';
import last from './last';
import pop from './pop';

export default prep({
    name: 'butLast',
    obj: () => (item) => pipeWith(
        item,
        del(pipeWith(
            Object.keys(item),
            last()
        ))
    ),
    arr: pop
});
