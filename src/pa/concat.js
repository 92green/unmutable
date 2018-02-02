// @flow
import prep from '../internal/prep';

export default prep({
    immutable: 'concat',
    array: (...newItems) => (item: Array<*>): Array<*> => item.concat(...newItems)
});
