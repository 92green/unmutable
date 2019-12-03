// @flow
import prep from './internal/unmutable';
import overload from './util/overload';
import get from './get';
import {objectGet} from './get';
import {arrayGet} from './get';
import set from './set';
import {objectSet} from './set';
import {arraySet} from './set';

let updateSelf = (updater: Function) => (value) => updater(value);

let updateAll = (key: string|number, updater: Function, notSetValue: * = undefined) => (value): * => {
    return set(key, updater(get(key, notSetValue)(value)))(value);
};

let updateObject = (key: string, updater: Function, notSetValue: * = undefined) => (value): * => {
    return objectSet(key, updater(objectGet(key, notSetValue)(value)))(value);
};

let updateArray = (key: number, updater: Function, notSetValue: * = undefined) => (value): * => {
    return arraySet(key, updater(arrayGet(key, notSetValue)(value)))(value);
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
    }),
    all: overload({
        ["1"]: updateSelf,
        ["2"]: (key: number, updater: Function) => updateAll(key, updater),
        ["3"]: (key: number, notSetValue: *, updater: Function) => updateAll(key, updater, notSetValue)
    }),
    ap: true,
    of: true
});
