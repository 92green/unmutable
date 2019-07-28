// @flow
import prep from './internal/unmutable';
import slice from './slice';

export default prep({
    n: 'pop',
    i: 'pop',
    a: () => slice(0, -1)
});
