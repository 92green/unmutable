// @flow
import prep from './internal/prep';

export default prep({
    name: 'unshift',
    arr: (...values: Array<*>) => (item: Array<*>): Array<*> => [...values, ...item]
});
