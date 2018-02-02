// @flow
import prep from '../internal/prep';

export default prep({
    immutable: 'delete',
    object: (key: string) => (item: Object): Object => {
        let clone = {...item};
        delete clone[key];
        return clone;
    },
    array: (key: number) => (item: Array<*>): Array<*> => {
        let clone = [...item];
        clone.splice(key, 1);
        return clone;
    }
});
