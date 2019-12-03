// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'unshift',
    immutable: 'unshift',
    array: (...newValues: Array<*>) => (value: Array<*>): Array<*> => [...newValues, ...value],
    ap: true,
    of: true
});
