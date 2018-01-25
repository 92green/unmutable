// @flow
import prep from '../internal/prep';

export default prep({
    name: 'push',
    arr: (...values: Array<*>) => (item: Array<*>): Array<*> => [...item, ...values]
});
