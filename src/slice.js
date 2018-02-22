// @flow
import prep from './internal/prep';
import pick from './pick';

export default prep({
    immutable: 'slice',
    object: (begin: number = 0, end: ?number) => (item: Object): Object => {
        let keys = Object.keys(item);
        let keysSliced = (end || end === 0)
            ? keys.slice(begin, end)
            : keys.slice(begin);

        return pick(keysSliced)(item);
    },
    array: (begin: number = 0, end: ?number) => (item: Array<*>): Array<*> => {
        return (end || end === 0)
            ? item.slice(begin, end)
            : item.slice(begin);
    }
});
