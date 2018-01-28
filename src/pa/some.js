// @flow
import prep from '../internal/prep';

export default prep({
    name: 'some',
    obj: (predicate: Function) => (item: Object): boolean => {
        for(let key in item) {
            if(predicate(item[key], key, item)) {
                return true;
            }
        }
        return false;
    },
    arr: (predicate: Function) => (item: Array<*>): boolean => item.some(predicate)
});
