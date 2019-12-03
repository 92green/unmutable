// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'reverse',
    immutable: 'reverse',
    array: () => (item: Array<*>): Array<*> => [...item].reverse(),
    ap: true,
    of: true
});
