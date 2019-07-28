// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'hashCode',
    i: 'hashCode',
    _: () => (value) => JSON.stringify(value)
});
