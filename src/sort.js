// @flow
import prep from './internal/prep';

type Comparator = (valueA: *, valueB: *) => number;

export default prep({
    name: 'sort',
    immutable: 'sort',
    array: (comparator: ?Comparator) => (value: Array<*>): Array<*> => {
        return value.sort(comparator);
    }
});
