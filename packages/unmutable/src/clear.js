// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'clear',
    i: 'clear',
    o: () => (): Object => ({}),
    a: () => (): Array<*> => []
});
