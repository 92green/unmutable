// @flow
import prep from './internal/unmutable';
import identity from './identity';

export default prep({
    name: 'clone',
    immutable: () => identity(),
    object: () => (value: Object): Object => ({...value}),
    array: () => (value: Array<*>): Array<*> => [...value]
});
