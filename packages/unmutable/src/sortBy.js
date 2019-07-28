// @flow
import prep from './internal/unmutable';

const defaultComparator = (a: *, b: *): number => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
};

export default prep({
    n: 'sortBy',
    i: 'sortBy',
    a: (comparatorValueMapper: Function, comparator: Function = defaultComparator) => (value: Array<*>): Array<*> => {
        return [...value].sort((a, b) => comparator(
            comparatorValueMapper(a),
            comparatorValueMapper(b)
        ));
    }
});
