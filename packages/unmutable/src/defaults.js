// @flow
import prep from './internal/unmutable';
import merge from './merge';

export default prep({
    name: 'defaults',
    all: (defaults: *) => (value: *): * => merge(value)(defaults)
});
