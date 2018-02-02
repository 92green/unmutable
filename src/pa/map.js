// @flow
import prep from '../internal/prep';

export default prep({
    immutable: 'map',
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
