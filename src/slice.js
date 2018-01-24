// @flow
import prep from './internal/prep';
import slice from './slice';

export default prep({
    name: 'slice',
    arr: (begin: ?number, end: ?number) => (item: Array<*>): Array<*> => item.slice(begin, end)
});
