// @flow
import prep from './internal/prep';
import get from './get';
import overload from './util/overload';
import {objectSet} from './set';
import {arraySet} from './set';

let updateSelf = (updater: Function) => (value) => updater(value);

let updateObject = (key: string, updater: Function, notSetValue: * = undefined) => (value): * => {
    return objectSet(key, updater(get(key, notSetValue)(value)))(value);
};

let updateArray = (key: number, updater: Function, notSetValue: * = undefined) => (value): * => {
    return arraySet(key, updater(get(key, notSetValue)(value)))(value);
};

export default prep({
    name: 'update',
    immutable: 'update',
    object: overload({
        ["1"]: updateSelf,
        ["2"]: (key: string, updater: Function) => updateObject(key, updater),
        ["3"]: (key: string, notSetValue: *, updater: Function) => updateObject(key, updater, notSetValue)
    }),
    array: overload({
        ["1"]: updateSelf,
        ["2"]: (key: number, updater: Function) => updateArray(key, updater),
        ["3"]: (key: number, notSetValue: *, updater: Function) => updateArray(key, updater, notSetValue)
    })
});
