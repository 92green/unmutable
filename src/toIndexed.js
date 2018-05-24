// @flow
import prep from './internal/prep';
import values from './values';

export default prep({
    name: 'toIndexed',
    immutable: 'toList',
    all: () => (item: Array<*>): Array<*> => [...values()(item)]
});
