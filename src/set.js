// @flow
import prep from './internal/prep';

export default prep({
    name: 'set',
    immutable: 'set',
    record: 'set',
    object: (key: string, childValue: *) => (value: Object): Object => ({...value, [key]: childValue}),
    array: (key: number, childValue: *) => (value: Array<*>): Array<*> => {
        key = key < 0 ? key + value.length : key;
        let clone = [...value];
        clone[key] = childValue;
        return clone;
    }
});
