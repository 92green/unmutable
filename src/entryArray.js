// @flow
import prep from './internal/prep';
import entries from './entries';

export default prep({
    name: 'entriesArray',
    all: () => (value: *): Array<*> => [...entries()(value)]
});
