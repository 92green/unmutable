// @flow
import prep from '../internal/prep';
import slice from './slice';

export default prep({
    name: 'shift',
    arr: () => slice(1)
});
