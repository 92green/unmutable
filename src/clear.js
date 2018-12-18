// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'clear',
    immutable: 'clear',
    object: () => (): Object => ({}),
    array: () => (): Array<*> => []
});
