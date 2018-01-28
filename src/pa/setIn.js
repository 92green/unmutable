// @flow
import prep from '../internal/prep';
import getIn from './getIn';
import set from './set';
import pipeWith from '../util/pipeWith';

// we're not using Immutable.js setIn because it can't cope with mixed types in the keyPath

export default prep({
    all: (keyPath: string[], value: *) => (item: *): * => {
        let notFoundContainer = item.toMap
            ? item.toMap().clear()
            : {};

        for(var i = keyPath.length - 1; i >= 0; i--) {
            const partialKeyPath = keyPath.slice(0, i);
            value = pipeWith(
                item,
                getIn(partialKeyPath, notFoundContainer),
                set(keyPath[i], value)
            );
        }
        return value;
    }
});
