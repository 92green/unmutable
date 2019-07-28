// @flow
import prep from './internal/unmutable';
import identity from './identity';
import slice from './slice';

export default prep({
    n: 'skipLast',
    i: 'skipLast',
    _: (amount: number) => amount === 0 ? identity() : slice(0, -amount)
});
