// @flow
import prep from './internal/unmutable';

export const objectSet = (key: string, childValue: *) => (value: Object): Object => ({...value, [key]: childValue});

export const arraySet = (key: number, childValue: *) => (value: Array<*>): Array<*> => {
    key = key < 0 ? key + value.length : key;
    let clone = [...value];
    clone[key] = childValue;
    return clone;
};

export default prep({
    n: 'set',
    i: 'set',
    r: 'set',
    o: objectSet,
    a: arraySet
});
