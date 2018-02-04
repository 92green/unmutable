// @flow
import prep from '../internal/prep';
import pick from './pick';

export default prep({
    immutable: 'slice',
    object: (begin: ?number, end: ?number) => (item: Object): Object => pick(Object.keys(item).slice(begin, end))(item),
    array: (begin: ?number, end: ?number) => (item: Array<*>): Array<*> => item.slice(begin, end)
});
