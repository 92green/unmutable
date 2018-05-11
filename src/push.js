// @flow
import prep from './internal/prep';

export default prep({
    name: 'push',
    immutable: 'push',
    array: (...newValues: Array<*>) => (value: Array<*>): Array<*> => [...value, ...newValues]
});
