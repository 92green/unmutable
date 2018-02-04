// @flow
import prep from '../internal/prep';
import pipeWith from '../util/pipeWith';
import entryArray from '../pa/entryArray';
import reduce from '../pa/reduce';



export default prep({
    immutable: 'filterNot',
    record: (predicate: Function) => (item: *): * => pipeWith(
        item,
        entryArray(),
        reduce((record, [key, value]) => predicate(value, key, record) ? record.delete(key) : record, item)
    ),
    object: (predicate: Function) => (item: Object): * => {
        return Object
            .keys(item)
            .reduce((obj: Object, key: string): Object => {
                let value = item[key];
                return !predicate(value, key, item) ? {...obj, [key]: value} : obj;
            }, {});
    },
    array: (predicate: Function) => (item: Array<*>): * => item.filter((...args) => !predicate(...args))
});
