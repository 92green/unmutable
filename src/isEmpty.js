// @flow
import prep from './internal/prep';
import count from './count';

export default prep({
    name: 'isEmpty',
    obj: () => (item: Object): boolean => count()(item) === 0,
    arr: () => (item: Array<*>): boolean => count()(item) === 0
});
