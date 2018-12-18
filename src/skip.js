// @flow
import prep from './internal/unmutable';
import slice from './slice';

export default prep({
    name: 'skip',
    immutable: 'skip',
    all: (amount: number) => slice(amount)
});
