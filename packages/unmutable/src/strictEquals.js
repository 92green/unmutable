// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'strictEquals',
    _: (other: *) => (value: *): boolean => value === other
});
