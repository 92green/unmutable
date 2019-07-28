// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    n: 'entriesArray',
    _: () => (value: *): Array<*> => [...entries()(value)]
});
