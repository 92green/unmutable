// @flow
import prep from './internal/prep';

export default prep({
    name: 'clear',
    obj: () => (): Object => ({}),
    arr: () => (): Array<*> => []
});
