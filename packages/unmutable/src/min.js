// @flow
import prep from './internal/unmutable';
import minBy from './minBy';

const defaultComparator = (a: *, b: *): number => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
};

export default prep({
    n: 'min',
    i: 'min',
    _: (comparator: Function = defaultComparator) => minBy(_ => _, comparator)
});
