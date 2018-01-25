// @flow
import prep from '../internal/prep';

export default prep({
    name: 'count',
    obj: () => (item: Object): number => Object.keys(item).length,
    arr: () => (item: Array<*>): number => item.length
});
