// @flow
import prep from './internal/unmutable';
import identity from './identity';

export default prep({
    n: 'toJS',
    i: 'toJS',
    _: identity
});
