// @flow
import prep from '../internal/prep';

export default prep({
    name: 'concat',
    arr: (...newItems) => (item: Array<*>): Array<*> => item.concat(...newItems)
});
