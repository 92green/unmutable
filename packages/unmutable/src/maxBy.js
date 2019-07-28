// @flow
import prep from './internal/unmutable';
import count from './count';
import first from './first';
import reduce from './reduce';
import rest from './rest';
import pipeWith from './util/pipeWith';

const defaultComparator = (a: *, b: *): number => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
};

export default prep({
    n: 'maxBy',
    i: 'maxBy',
    _: (comparatorValueMapper: Function, comparator: Function = defaultComparator) => (value: *): * => {
        let counted = count()(value);
        if(counted === 0) {
            return undefined;
        }
        return pipeWith(
            value,
            rest(),
            reduce(
                (max: *, child: *) => {
                    let maxValue = comparatorValueMapper(max);
                    let childValue = comparatorValueMapper(child);
                    let compared: number = comparator(childValue, maxValue);

                    if(compared > 0) {
                        return child;
                    } else if(compared === 0) {
                        if(isNaN(childValue) || childValue === null || typeof childValue === "undefined") {
                            return child;
                        }
                        return max;
                    }
                    return max;
                },
                first()(value)
            )
        );
    }
});
