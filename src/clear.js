// @flow
import prep from './internal/prep';

export default prep({
    name: 'clear',
    immutable: 'clear',
    object: () => (): Object => ({}),
    array: () => (): Array<*> => []
});
