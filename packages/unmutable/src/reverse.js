// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'reverse',
    i: 'reverse',
    a: () => (item: Array<*>): Array<*> => [...item].reverse()
});
