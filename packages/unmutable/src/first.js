// @flow
import prep from './internal/unmutable';
import get from './get';
import values from './values';

export default prep({
    n: 'first',
    i: 'first',
    a: () => get(0),
    _: () => (value) => values()(value).next().value
});
