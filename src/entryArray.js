// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    name: 'entriesArray',
    all: () => (value: *): Array<*> => [...entries()(value)]
});
