// @flow
import prep from './internal/unmutable';
import slice from './slice';

export default prep({
    n: 'shift',
    i: 'shift',
    a: () => slice(1)
});
