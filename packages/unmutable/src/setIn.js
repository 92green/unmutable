// @flow
import prep from './internal/unmutable';
import getIn from './getIn';
import set from './set';
import pipeWith from './util/pipeWith';

// we're not using Immutable.js setIn because it can't cope with mixed types in the keyPath

export default prep({
    n: 'setIn',
    _: (keyPath: string[], childValue: *) => (value: *): * => {
        let notFoundContainer = value.toMap
            ? value.toMap().clear()
            : {};

        for(var i = keyPath.length - 1; i >= 0; i--) {
            const partialKeyPath = keyPath.slice(0, i);
            childValue = pipeWith(
                value,
                getIn(partialKeyPath, notFoundContainer),
                set(keyPath[i], childValue)
            );
        }
        return childValue;
    }
});
