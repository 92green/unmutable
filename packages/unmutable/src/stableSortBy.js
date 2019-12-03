// @flow
import prep from './internal/unmutable';
import map from './map';
import pipe from './pipe';
import sortBy from './sortBy';

const defaultComparator = (a: *, b: *): number => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
};

export default prep({
    name: 'stableSort',
    all: (comparatorValueMapper: Function, comparator: Function = defaultComparator) => pipe(
        map((value, index) => ({value, index})),
        sortBy(
            (item) => ({
                value: comparatorValueMapper(item.value),
                index: item.index
            }),
            (a, b) => comparator(a.value, b.value) || a.index - b.index
        ),
        map(item => item.value)
    )
});
