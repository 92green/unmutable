// @flow
import prep from './internal/prep';
import pick from './pick';

export default prep({
    name: 'slice',
    immutable: 'slice',
    object: (begin: number = 0, end: ?number) => (value: Object): Object => {
        let keys = Object.keys(value);
        let keysSliced = (end || end === 0)
            ? keys.slice(begin, end)
            : keys.slice(begin);

        return pick(keysSliced)(value);
    },
    array: (begin: number = 0, end: ?number) => (value: Array<*>): Array<*> => {
        return (end || end === 0)
            ? value.slice(begin, end)
            : value.slice(begin);
    }
});
