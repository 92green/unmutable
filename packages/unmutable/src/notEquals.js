// @flow
import prep from './internal/unmutable';
import equals from './equals';

export default prep({
    n: 'notEquals',
    _: (other) => (value) => !equals(other)(value)
});
