// @flow
import prep from '../internal/prep';
import pick from './pick';

export default prep({
    name: 'slice',
    obj: (begin: ?number, end: ?number) => (item: Object): Object => pick(Object.keys(item).slice(begin, end))(item),
    arr: (begin: ?number, end: ?number) => (item: Array<*>): Array<*> => item.slice(begin, end)
});
