// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'push',
    immutable: 'push',
    array: (...newValues: Array<*>) => (value: Array<*>): Array<*> => [...value, ...newValues],
    ap: true,
    of: true
});
