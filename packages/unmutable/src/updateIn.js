// @flow
import prep from './internal/unmutable';
import getIn from './getIn';
import setIn from './setIn';
import overload from './util/overload';

// we're not using Immutable.js updateIn because it can't cope with mixed types in the keyPath

let updateIn = (keyPath: string[], updater: Function, notSetValue: * = undefined) => (value: *): * => {
    let updated: * = updater(getIn(keyPath, notSetValue)(value));
    return updated === notSetValue
        ? value
        : setIn(keyPath, updated)(value);
};

export default prep({
    name: 'updateIn',
    all: overload({
        ["2"]: (keyPath: string[], updater: Function) => updateIn(keyPath, updater),
        ["3"]: (keyPath: string[], notSetValue: *, updater: Function) => updateIn(keyPath, updater, notSetValue)
    })
});
