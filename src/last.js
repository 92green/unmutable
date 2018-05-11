// @flow
import prep from './internal/prep';
import get from './get';

export default prep({
    name: 'last',
    immutable: 'last',
    object: () => (value: Object): * => {
        return value[get(-1)(Object.keys(value))];
    },
    array: () => get(-1)
});
