// @flow
import prep from './internal/prep';

export default prep({
    name: 'delete',
    immutable: 'delete',
    record: 'delete',
    object: (key: string) => (value: Object): Object => {
        let clone = {...value};
        delete clone[key];
        return clone;
    },
    array: (key: number) => (value: Array<*>): Array<*> => {
        let clone = [...value];
        clone.splice(key, 1);
        return clone;
    }
});
