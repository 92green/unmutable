// @flow
import prep from '../internal/prep';
import get from './get';

export default prep({
    name: 'first',
    obj: () => (item) => item[get(0)(Object.keys(item))],
    arr: () => get(0)
});
