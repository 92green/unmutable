// @flow
import prep from '../internal/prep';
import pipeWith from '../util/pipeWith';
import entryArray from '../pa/entryArray';
import reduce from '../pa/reduce';


export default prep({
    immutable: 'map',
    record: (mapper: Function) => (item: *): * => pipeWith(
        item,
        entryArray(),
        reduce((record, [key, value]) => record.set(key, mapper(value, key, record)), item)
    ),
    object: (mapper: Function) => (item: Object): * => {
        return Object
            .keys(item)
            .reduce((obj: Object, key: string): Object => {
                obj[key] = mapper(item[key], key, item);
                return obj;
            }, {});
    },
    array: (mapper: Function) => (item: Array<*>): * => item.map(mapper)
});
