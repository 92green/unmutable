// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import entryArray from './entryArray';
import reduce from './reduce';

export default prep({
    name: 'filter',
    immutable: 'filter',
    record: (predicate: Function) => (value: *): * => pipeWith(
        value,
        entryArray(),
        reduce((record, [key, childValue]) => predicate(childValue, key, record) ? record : record.delete(key), value)
    ),
    object: (predicate: Function) => (value: Object): * => {
        return Object
            .keys(value)
            .reduce((obj: Object, key: string): Object => {
                let childValue = value[key];
                return predicate(childValue, key, value) ? {...obj, [key]: childValue} : obj;
            }, {});
    },
    array: (predicate: Function) => (value: Array<*>): * => value.filter(predicate)
});
