// @flow
import prep from './internal/prep';
import count from './count';

export default prep({
    name: 'isEmpty',
    immutable: 'isEmpty',
    record: () => (value: *): boolean => value.equals(new value.constructor()),
    object: () => (value: Object): boolean => count()(value) === 0,
    array: () => (value: Array<*>): boolean => count()(value) === 0
});
