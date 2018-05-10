// @flow
import prep from './internal/prep';
import has from './has';

export default prep({
    name: 'get',
    immutable: 'get',
    record: 'get',
    object: (key: string, notFoundValue: * = undefined) => (value: Object): * => {
        return has(key)(value)
            ? value[key]
            : notFoundValue;
    },
    array: (key: number, notFoundValue: * = undefined) => (value: Array<*>): * => {
        return has(key)(value)
            ? (key < 0 ? value[key + value.length] : value[key])
            : notFoundValue;
    }
});
