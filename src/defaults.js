// @flow
import prep from './internal/prep';
import merge from './merge';

export default prep({
    name: 'defaults',
    all: (defaults: *) => (value: *): * => merge(value)(defaults)
});
