// @flow
import prep from './internal/unmutable';
import slice from './slice';

export default prep({
    n: 'skip',
    i: 'skip',
    _: (amount: number) => slice(amount)
});
