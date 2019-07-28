// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'delete',
    i: 'delete',
    r: 'delete',
    o: (key: string) => (value: Object): Object => {
        let clone = {...value};
        delete clone[key];
        return clone;
    },
    a: (key: number) => (value: Array<*>): Array<*> => {
        let clone = [...value];
        clone.splice(key, 1);
        return clone;
    }
});
