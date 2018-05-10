// @flow
import prep from './internal/prep';
import values from './values';

export default prep({
    name: 'toArray',
    all: () => (item: Array<*>): Array<*> => [...values()(item)]
});
