// @flow
import prep from '../internal/prep';
import noop from './noop';
import slice from './slice';

export default prep({
    name: 'skipLast',
    all: (amount: number) => amount === 0 ? noop() : slice(0, -amount)
});
