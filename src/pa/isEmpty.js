// @flow
import prep from '../internal/prep';
import count from './count';

export default prep({
    immutable: 'isEmpty',
    object: () => (item: Object): boolean => count()(item) === 0,
    array: () => (item: Array<*>): boolean => count()(item) === 0
});
