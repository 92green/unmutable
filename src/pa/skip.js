// @flow
import prep from '../internal/prep';
import slice from './slice';

export default prep({
    name: 'skip',
    all: (amount: number) => slice(amount)
});
