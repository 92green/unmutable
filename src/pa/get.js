// @flow
import prep from '../internal/prep';
import has from './has';

export default prep({
    immutable: 'get',
    record: 'get',
    object: (key: string, notFoundValue: * = undefined) => (item: Object): * => {
        return has(key)(item)
            ? item[key]
            : notFoundValue;
    },
    array: (key: number, notFoundValue: * = undefined) => (item: Array<*>): * => {
        return has(key)(item)
            ? (key < 0 ? item[key + item.length] : item[key])
            : notFoundValue;
    }
});
