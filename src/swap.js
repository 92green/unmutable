// @flow
import prep from './internal/unmutable';
import get from './get';
import set from './set';
import pipeWith from './util/pipeWith';

export default prep({
    name: 'swap',
    all: (keyA: string|number, keyB: string|number) => (value: Object): Object => {
        return pipeWith(
            value,
            set(keyA, get(keyB)(value)),
            set(keyB, get(keyA)(value))
        );
    }
});
