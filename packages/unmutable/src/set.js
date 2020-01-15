// @flow
import prep from './internal/unmutable';

export const objectSet = (key: string, childValue: *) => (value: Object): Object => ({...value, [key]: childValue});

export const arraySet = (key: number, childValue: *) => (value: Array<*>): Array<*> => {
    key = key < 0 ? key + value.length : key;
    if(key < 0) return [childValue, ...Array(-key-1), ...value];
    let clone = [...value];
    clone[key] = childValue;
    return clone;
};

export default prep({
    name: 'set',
    immutable: 'set',
    record: 'set',
    object: objectSet,
    array: arraySet
});
