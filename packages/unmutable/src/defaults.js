// @flow
import prep from './internal/unmutable';
import merge from './merge';

export default prep({
    n: 'defaults',
    _: (defaults: *) => (value: *): * => merge(value)(defaults)
});
