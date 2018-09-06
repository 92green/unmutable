// @flow
import prep from './internal/prep';
import mergeDeep from './mergeDeep';
import updateIn from './updateIn';

export default prep({
    name: 'mergeDeepIn',
    immutable: 'mergeDeepIn',
    object: (keyPath: Array<*>, ...newValues) => updateIn(keyPath, mergeDeep(...newValues))
});
