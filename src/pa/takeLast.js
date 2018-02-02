// @flow
import prep from '../internal/prep';
import clear from './clear';
import slice from './slice';

export default prep({
    immutable: 'takeLast',
    all: (amount: number) => amount === 0 ? clear() : slice(-amount)
});
