// @flow
import prep from '../internal/prep';

export default prep({
    immutable: 'filter',
    object: (predicate: Function) => (item: Object): * => {
        return Object
            .keys(item)
            .reduce((obj: Object, key: string): Object => {
                let value = item[key];
                return predicate(value, key, item) ? {...obj, [key]: value} : obj;
            }, {});
    },
    array: (predicate: Function) => (item: Array<*>): * => item.filter(predicate)
});
