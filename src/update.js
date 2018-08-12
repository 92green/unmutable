// @flow
import prep from './internal/prep';
import get from './get';
import overload from './util/overload';
import set from './set';

let update = (key: string, updater: Function, notSetValue: * = undefined) => (value): * => {
    return set(key, updater(get(key, notSetValue)(value)))(value);
};

export default prep({
    name: 'update',
    immutable: 'update',
    all: overload({
        ["1"]: (updater: Function) => (value) => updater(value),
        ["2"]: (key: string, updater: Function) => update(key, updater),
        ["3"]: (key: string, notSetValue: *, updater: Function) => update(key, updater, notSetValue)
    })
});
