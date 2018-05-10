// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import entryArray from './entryArray';
import reduce from './reduce';


export default prep({
    name: 'map',
    immutable: 'map',
    record: (mapper: Function) => (value: *): * => pipeWith(
        value,
        entryArray(),
        reduce((record, [key, value]) => record.set(key, mapper(value, key, record)), value)
    ),
    object: (mapper: Function) => (value: Object): * => {
        return Object
            .keys(value)
            .reduce((obj: Object, key: string): Object => {
                obj[key] = mapper(value[key], key, value);
                return obj;
            }, {});
    },
    array: (mapper: Function) => (value: Array<*>): * => value.map(mapper)
});
