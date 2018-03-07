// @flow
import prep from './internal/prep';
import slice from './slice';

export default prep({
    immutable: 'take',
    all: (amount: number) => slice(0, amount)
});