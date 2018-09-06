// @flow
import prep from './internal/prep';
import toArray from './toArray';
import toObject from './toObject';
import pipe from './util/pipe';

export default prep({
    name: 'merge',
    immutable: 'merge',
    object: (...newValues: Array<*>) => pipe(
        ...newValues.map(pipe(
            toObject(),
            (newValue) => (value) => ({...value, ...newValue})
        ))
    ),
    array: (...newValues: Array<*>) => pipe(
        ...newValues.map(pipe(
            toArray(),
            (newValue) => (value) => [...value, ...newValue]
        ))
    )
});
