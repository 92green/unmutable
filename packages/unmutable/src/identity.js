// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'identity',
    _: () => (ii: *): * => ii
});
