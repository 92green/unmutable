// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'sort',
    i: 'sort',
    a: (comparator: Function) => (value: Array<*>): Array<*> => {
        return [...value].sort(comparator);
    }
});
