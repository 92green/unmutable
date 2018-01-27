// @flow
import prep from '../internal/prep';
import get from './get';

export default prep({
    name: 'last',
    obj: () => (item) => {
        return item[get(-1)(Object.keys(item))];
    },
    arr: () => get(-1)
});
