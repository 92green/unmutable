// @flow
import prep from '../internal/prep';

export default prep({
    name: 'delete',
    obj: (key: string) => (item: Object): Object => {
        let clone = {...item};
        delete clone[key];
        return clone;
    },
    arr: (key: number) => (item: Array<*>): Array<*> => {
        let clone = [...item];
        clone.splice(key, 1);
        return clone;
    }
});
