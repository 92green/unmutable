// @flow
import prep from './internal/unmutable';
import toArray from './toArray';
import toObject from './toObject';
import pipe from './util/pipe';

export default prep({
    n: 'merge',
    i: 'merge',
    o: (...newValues: Array<*>) => pipe(
        ...newValues.map(pipe(
            toObject(),
            (newValue) => (value) => ({...value, ...newValue})
        ))
    ),
    a: (...newValues: Array<*>) => pipe(
        ...newValues.map(pipe(
            toArray(),
            (newValue) => (value) => [...value, ...newValue]
        ))
    )
});
