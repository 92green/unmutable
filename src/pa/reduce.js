// @flow
import prep from '../internal/prep';

export default prep({
    immutable: 'reduce',
    object: (reducer: Function, initialReduction: *) => (item: Object): * => {
        return Object
            .keys(item)
            .reduce(
                (reduction, key) => reducer(reduction, item[key], key, item),
                initialReduction
            );
    },
    array: (reducer: Function, initialReduction: *) => (item: Array<*>): * => item.reduce(reducer, initialReduction)
});
