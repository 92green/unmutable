// @flow
import prep from './internal/prep';
import get from './get';

export default prep({
    immutable: 'last',
    object: () => (item: Object): * => {
        return item[get(-1)(Object.keys(item))];
    },
    array: () => get(-1)
});
