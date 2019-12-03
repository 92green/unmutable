// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'clear',
    immutable: 'clear',
    object: () => (): Object => ({}),
    array: () => (): Array<*> => [],
    ap: true,
    of: true
});
