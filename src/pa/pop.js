// @flow
import prep from '../internal/prep';
import slice from './slice';

export default prep({
    immutable: 'pop',
    array: () => slice(0, -1)
});
