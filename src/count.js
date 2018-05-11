// @flow
import prep from './internal/prep';
import keyArray from './keyArray';

let keyed = () => (value: Object): number => keyArray()(value).length;

export default prep({
    name: 'count',
    immutable: 'count',
    record: keyed,
    object: keyed,
    array: () => (value: Array<*>): number => value.length
});
