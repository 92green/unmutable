// @flow
import prep from './internal/unmutable';
import values from './values';

export default prep({
    name: 'toArray',
    all: () => (item: Array<*>): Array<*> => [...values()(item)]
});
