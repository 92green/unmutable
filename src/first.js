// @flow
import prep from './internal/prep';
import get from './get';

export default prep({
    immutable: 'first',
    object: () => (item) => item[get(0)(Object.keys(item))],
    array: () => get(0)
});
