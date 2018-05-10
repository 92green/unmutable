// @flow
import prep from './internal/prep';

export default prep({
    name: 'unshift',
    immutable: 'unshift',
    array: (...newValues: Array<*>) => (value: Array<*>): Array<*> => [...newValues, ...value]
});
