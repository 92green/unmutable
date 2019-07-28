// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'concat',
    i: 'concat',
    a: (...newValues) => (item: Array<*>): Array<*> => item.concat(...newValues)
});
