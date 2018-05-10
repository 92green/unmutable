// @flow
import prep from './internal/prep';
import slice from './slice';

export default prep({
    name: 'shift',
    immutable: 'shift',
    array: () => slice(1)
});
