// @flow
import prep from './internal/prep';
import toArray from './toArray';
import toObject from './toObject';
import pipe from './util/pipe';

export default prep({
    name: 'mergeWith',
    immutable: 'mergeWith',
    object: (merger: Function, ...newValues: Array<*>) => pipe(
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
