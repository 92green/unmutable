// @flow
import prep from './internal/prep';
import get from './get';

export default prep({
    name: 'last',
    arr: () => get(-1)
});
