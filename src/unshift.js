// @flow
import prep from './internal/prep';

export default prep({
    immutable: 'unshift',
    array: (...values: Array<*>) => (item: Array<*>): Array<*> => [...values, ...item]
});
