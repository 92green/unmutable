// @flow
import prep from './internal/unmutable';
import minBy from './minBy';

const defaultComparator = (a: *, b: *): number => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
};

export default prep({
    name: 'min',
    immutable: 'min',
    all: (comparator: Function = defaultComparator) => minBy(_ => _, comparator)
});
