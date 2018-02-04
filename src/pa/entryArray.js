// @flow
import prep from '../internal/prep';
import entries from './entries';

export default prep({
    all: () => (item: *): Array<*> => [...entries()(item)]
});
