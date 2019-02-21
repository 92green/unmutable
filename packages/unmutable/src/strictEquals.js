// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'strictEquals',
    all: (other: *) => (value: *): boolean => value === other
});
