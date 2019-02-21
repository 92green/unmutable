// @flow
import prep from './internal/unmutable';
import clear from './clear';
import slice from './slice';

export default prep({
    name: 'takeLast',
    immutable: 'takeLast',
    all: (amount: number) => amount === 0 ? clear() : slice(-amount)
});
