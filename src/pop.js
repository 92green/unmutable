// @flow
import prep from './internal/prep';
import slice from './slice';

export default prep({
    name: 'pop',
    arr: () => slice(0, -1)
});
