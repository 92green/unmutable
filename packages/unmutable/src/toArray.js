// @flow
import prep from './internal/unmutable';
import values from './values';

export default prep({
    n: 'toArray',
    _: () => (item: Array<*>): Array<*> => [...values()(item)]
});
