// @flow
import prep from './internal/prep';

export default prep({
    name: 'clear',
    obj: () => (item): Object => ({}),
    arr: () => (item): Array<*> => []
});
