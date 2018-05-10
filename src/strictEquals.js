// @flow
import prep from './internal/prep';

export default prep({
    name: 'strictEquals',
    all: (other: *) => (value: *): boolean => value === other
});
