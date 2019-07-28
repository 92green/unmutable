// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'unshift',
    i: 'unshift',
    a: (...newValues: Array<*>) => (value: Array<*>): Array<*> => [...newValues, ...value]
});
