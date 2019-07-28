// @flow
import prep from './internal/unmutable';
import slice from './slice';

export default prep({
    n: 'take',
    i: 'take',
    _: (amount: number) => slice(0, amount)
});
