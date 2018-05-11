// @flow
import prep from './internal/prep';

export default prep({
    name: 'identity',
    all: () => (ii: *): * => ii
});
