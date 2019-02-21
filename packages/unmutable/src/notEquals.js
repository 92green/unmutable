// @flow
import prep from './internal/unmutable';
import equals from './equals';

export default prep({
    name: 'notEquals',
    all: (other) => (value) => !equals(other)(value)
});
