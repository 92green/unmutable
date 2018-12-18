// @flow
import prep from './internal/unmutable';
import slice from './slice';

export default prep({
    name: 'take',
    immutable: 'take',
    all: (amount: number) => slice(0, amount)
});
