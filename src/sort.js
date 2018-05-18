// @flow
import prep from './internal/prep';

export default prep({
    name: 'sort',
    immutable: 'sort',
    array: (comparator: Function) => (value: Array<*>): Array<*> => {
        return value.sort(comparator);
    }
});
