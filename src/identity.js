// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'identity',
    all: () => (ii: *): * => ii
});
