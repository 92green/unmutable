// @flow
import prep from './internal/prep';
import get from './get';

export default prep({
    name: 'first',
    immutable: 'first',
    object: () => (value) => value[get(0)(Object.keys(value))],
    array: () => get(0)
});
