// @flow
import prep from './internal/unmutable';
import merge from './merge';
import updateIn from './updateIn';

export default prep({
    n: 'mergeIn',
    i: 'mergeIn',
    o: (keyPath: Array<*>, ...newValues) => updateIn(keyPath, merge(...newValues))
});
