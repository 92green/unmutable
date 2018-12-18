// @flow
import prep from './internal/unmutable';
import del from './delete';
import updateIn from './updateIn';

// we're not using Immutable.js deleteIn because it can't cope with mixed types in the keyPath

export default prep({
    name: 'deleteIn',
    all: (keyPath: string[]) => keyPath.length === 0
        ? () => undefined
        : updateIn(
            keyPath.slice(0, -1),
            ii => ii && del(keyPath[keyPath.length - 1])(ii)
        )
});
