// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'deleteMutate',
    immutable: 'delete',
    record: 'delete',
    object: (key: string) => (value: Object): Object => {
        delete value[key];
        return value;
    },
    array: (key: number) => (value: Array<*>): Array<*> => {
        value.splice(key, 1);
        return value;
    },
    all: (key) => value => value.delete(key)
});
