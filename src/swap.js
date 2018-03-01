// @flow
import prep from './internal/prep';
import get from './get';
import set from './set';
import pipeWith from './util/pipeWith';

export default prep({
    all: (keyA: string|number, keyB: string|number) => (item: Object): Object => {
        return pipeWith(
            item,
            set(keyA, get(keyB)(item)),
            set(keyB, get(keyA)(item))
        );
    }
});
