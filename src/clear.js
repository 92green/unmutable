// @flow
import prep from './internal/prep';

export default prep({
    immutable: 'clear',
    object: () => (): Object => ({}),
    array: () => (): Array<*> => []
});
