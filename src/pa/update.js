// @flow
import prep from '../internal/prep';
import get from './get';
import overload from '../util/overload';
import set from './set';

export default prep({
    immutable: 'update',
    all: overload({
        ["1"]: () => (updater: Function) => (item) => updater(item),
        ["2"]: (fn) => (key: string, updater: Function) => fn(key, updater),
        ["3"]: (fn) => (key: string, notSetValue: *, updater: Function) => fn(key, updater, notSetValue)
    },
    (key: string, updater: Function, notSetValue: * = undefined) => (item) => set(key, updater(get(key, notSetValue)(item)))(item))
});
