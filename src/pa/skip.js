// @flow
import prep from '../internal/prep';
import slice from './slice';

export default prep({
    immutable: 'skip',
    all: (amount: number) => slice(amount)
});
