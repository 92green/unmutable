// @flow
import prep from './internal/unmutable';
import slice from './slice';

export default prep({
    name: 'shift',
    immutable: 'shift',
    array: () => slice(1)
});
