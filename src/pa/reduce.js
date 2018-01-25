// @flow
import prep from '../internal/prep';

export default prep({
    name: 'reduce',
    obj: (reducer: Function, initialReduction: *) => (item: Object): * => {
        return Object
            .keys(item)
            .reduce(
                (reduction, key) => reducer(reduction, item[key], key, item),
                initialReduction
            );
    },
    arr: (reducer: Function, initialReduction: *) => (item: Array<*>): * => item.reduce(reducer, initialReduction)
});
