// @flow
import prep from './internal/prep';

export default prep({
    name: 'set',
    obj: (key: string, value: *) => (item: Object): Object => ({...item, [key]: value}),
    arr: (key: number, value: *) => (item: Array<*>): Array<*> => {
        let clone = [...item];
        clone[key] = value;
        return clone;
    }
});
