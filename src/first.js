// @flow
import prep from './internal/prep';
import get from './get';

export default prep({
    name: 'first',
    arr: () => get(0)
});
