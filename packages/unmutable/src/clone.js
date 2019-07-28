// @flow
import prep from './internal/unmutable';
import identity from './identity';

export default prep({
    n: 'clone',
    i: identity,
    o: () => (value: Object): Object => ({...value}),
    a: () => (value: Array<*>): Array<*> => [...value]
});
