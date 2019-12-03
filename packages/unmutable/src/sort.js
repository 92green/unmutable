// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'sort',
    immutable: 'sort',
    array: (comparator: Function) => (value: Array<*>): Array<*> => {
        return [...value].sort(comparator);
    },
    ap: true,
    of: true
});
