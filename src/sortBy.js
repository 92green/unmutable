// @flow
import prep from './internal/prep';

const defaultComparator = (a: *, b: *): number => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
};

export default prep({
    name: 'sortBy',
    immutable: 'sortBy',
    array: (comparatorValueMapper: Function, comparator: Function = defaultComparator) => (value: Array<*>): Array<*> => {
        return [...value].sort((a, b) => comparator(
            comparatorValueMapper(a),
            comparatorValueMapper(b)
        ));
    }
});
