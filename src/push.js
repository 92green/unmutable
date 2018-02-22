// @flow
import prep from './internal/prep';

export default prep({
    immutable: 'push',
    array: (...values: Array<*>) => (item: Array<*>): Array<*> => [...item, ...values]
});
