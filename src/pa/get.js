// @flow
import prep from '../internal/prep';
import has from './has';

export default prep({
    name: 'get',
    obj: (key: string, notFoundValue: * = undefined) => (item: Object): * => {
        return has(key)(item)
            ? item[key]
            : notFoundValue;
    },
    arr: (key: number, notFoundValue: * = undefined) => (item: Array<*>): * => {
        return has(key)(item)
            ? (key < 0 ? item[key + item.length] : item[key])
            : notFoundValue;
    }
});
