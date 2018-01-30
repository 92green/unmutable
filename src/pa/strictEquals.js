// @flow
import prep from '../internal/prep';

export default prep({
    all: (other: *) => (item: *): boolean => item === other
});
