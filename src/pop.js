// @flow
import prep from './internal/prep';
import slice from './slice';

export default prep({
    name: 'pop',
    immutable: 'pop',
    array: () => slice(0, -1)
});
