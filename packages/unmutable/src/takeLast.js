// @flow
import prep from './internal/unmutable';
import clear from './clear';
import slice from './slice';

export default prep({
    n: 'takeLast',
    i: 'takeLast',
    _: (amount: number) => amount === 0 ? clear() : slice(-amount)
});
