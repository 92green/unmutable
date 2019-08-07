// @flow
import prep from './internal/unmutable';

export const objectSetMutate = (key: string, childValue: *) => (value: Object): Object => {
    value[key] = childValue;
    return value;
};

export const arraySetMutate = (key: number, childValue: *) => (value: Array<*>): Array<*> => {
    key = key < 0 ? key + value.length : key;
    value[key] = childValue;
    return value;
};

export default prep({
    name: 'setMutate',
    immutable: 'set',
    record: 'set',
    object: objectSetMutate,
    array: arraySetMutate,
    all: (...args) => value => value.set(...args)
});
