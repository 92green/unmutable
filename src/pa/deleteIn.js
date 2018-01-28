// @flow
import prep from '../internal/prep';
import del from './delete';
import updateIn from './updateIn';
import overload from '../util/overload';

// we're not using Immutable.js deleteIn because it can't cope with mixed types in the keyPath

export default prep({
    all: (keyPath: string[]) => keyPath.length === 0
        ? () => undefined
        : updateIn(
            keyPath.slice(0, -1),
            ii => ii && del(keyPath[keyPath.length - 1])(ii)
        )
});
