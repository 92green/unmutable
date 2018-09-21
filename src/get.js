// @flow
import prep from './internal/prep';
import {objectHas} from './has';
import {arrayHas} from './has';

export const objectGet = (key: string, notFoundValue: * = undefined) => (value: Object): * => {
    return objectHas(key)(value)
        ? value[key]
        : notFoundValue;
};

export const arrayGet = (key: number, notFoundValue: * = undefined) => (value: Array<*>): * => {
    return arrayHas(key)(value)
        ? (key < 0 ? value[key + value.length] : value[key])
        : notFoundValue;
};

export default prep({
    name: 'get',
    immutable: 'get',
    record: 'get',
    object: objectGet,
    array: arrayGet
});
