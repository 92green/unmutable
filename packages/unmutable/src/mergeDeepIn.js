// @flow
import prep from './internal/unmutable';
import mergeDeep from './mergeDeep';
import updateIn from './updateIn';

export default prep({
    n: 'mergeDeepIn',
    i: 'mergeDeepIn',
    o: (keyPath: Array<*>, ...newValues) => updateIn(keyPath, mergeDeep(...newValues))
});
