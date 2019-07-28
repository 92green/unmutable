// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'push',
    i: 'push',
    a: (...newValues: Array<*>) => (value: Array<*>): Array<*> => [...value, ...newValues]
});
