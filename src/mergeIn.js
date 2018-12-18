// @flow
import prep from './internal/unmutable';
import merge from './merge';
import updateIn from './updateIn';

export default prep({
    name: 'mergeIn',
    immutable: 'mergeIn',
    object: (keyPath: Array<*>, ...newValues) => updateIn(keyPath, merge(...newValues))
});
