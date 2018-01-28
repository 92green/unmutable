// @flow
import prep from '../internal/prep';
import getIn from './getIn';
import setIn from './setIn';
import overload from '../util/overload';

// we're not using Immutable.js updateIn because it can't cope with mixed types in the keyPath

export default prep({
    all: overload({
        ["2"]: (fn) => (keyPath: string[], updater: Function) => fn(keyPath, updater),
        ["3"]: (fn) => (keyPath: string[], notSetValue: *, updater: Function) => fn(keyPath, updater, notSetValue)
    },
    (keyPath: string[], updater: Function, notSetValue: * = undefined) => (item: *): * => {
        let updated: * = updater(getIn(keyPath, notSetValue)(item));
        return updated === notSetValue
            ? item
            : setIn(keyPath, updated)(item);
    })
});
