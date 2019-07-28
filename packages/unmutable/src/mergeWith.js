// @flow
import prep from './internal/unmutable';
import toObject from './toObject';
import pipe from './util/pipe';

export default prep({
    n: 'mergeWith',
    i: 'mergeWith',
    o: (merger: Function, ...newValues: Array<*>) => pipe(
        ...newValues.map(pipe(
            toObject(),
            (newValue) => (value) => {
                let clonedValue = {...value};
                Object.keys(newValue).forEach(key => {
                    clonedValue[key] = key in clonedValue
                        ? merger(clonedValue[key], newValue[key], key)
                        : newValue[key];
                });
                return clonedValue;
            }
        ))
    )
});
