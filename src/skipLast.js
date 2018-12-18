// @flow
import prep from './internal/unmutable';
import identity from './identity';
import slice from './slice';

export default prep({
    name: 'skipLast',
    immutable: 'skipLast',
    all: (amount: number) => amount === 0 ? identity() : slice(0, -amount)
});
