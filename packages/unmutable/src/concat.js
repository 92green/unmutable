// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'concat',
    immutable: 'concat',
    array: (...newValues) => (item: Array<*>): Array<*> => item.concat(...newValues)
});
