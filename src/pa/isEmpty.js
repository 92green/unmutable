// @flow
import prep from '../internal/prep';
import count from './count';

export default prep({
    immutable: 'isEmpty',
    record: () => (item: *): boolean => item.equals(new item.constructor()),
    object: () => (item: Object): boolean => count()(item) === 0,
    array: () => (item: Array<*>): boolean => count()(item) === 0
});
