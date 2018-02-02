// @flow
import prep from '../internal/prep';
import keyArray from './keyArray';

export default prep({
    immutable: 'count',
    keyed: () => (item: Object): number => keyArray()(item).length,
    array: () => (item: Array<*>): number => item.length
});
