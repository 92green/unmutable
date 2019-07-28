// @flow
import prep from './internal/unmutable';
import maxBy from './maxBy';

const defaultComparator = (a: *, b: *): number => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
};

export default prep({
    n: 'max',
    i: 'max',
    _: (comparator: Function = defaultComparator) => maxBy(_ => _, comparator)
});
