// @flow
import prep from '../internal/prep';

export default prep({
    name: 'every',
    obj: (predicate: Function) => (item: Object): boolean => {
        for(let key in item) {
            if(!predicate(item[key], key, item)) {
                return false;
            }
        }
        return true;
    },
    arr: (predicate: Function) => (item: Array<*>): boolean => item.every(predicate)
});
