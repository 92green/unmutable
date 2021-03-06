// @flow
import prep from './internal/unmutable';
import get from './get';
import values from './values';

export default prep({
    name: 'first',
    immutable: 'first',
    array: () => get(0),
    all: () => (value) => values()(value).next().value
});
