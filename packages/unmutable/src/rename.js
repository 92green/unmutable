// @flow
import prep from './internal/unmutable';
import del from './delete';
import get from './get';
import updateInto from './updateInto';
import pipeWith from './util/pipeWith';

export default prep({
    name: 'rename',
    all: (oldKey: string, newKey: string) => (value: *): * => {
        if(oldKey === newKey) {
            return value;
        }
        return pipeWith(
            value,
            updateInto(newKey, get(oldKey)),
            del(oldKey)
        );
    }
});
