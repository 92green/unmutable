// @flow
import prep from '../internal/prep';

export default prep({
    immutable: 'has',
    record: 'has',
    object: (key: string) => (item): boolean => item.hasOwnProperty(key),
    array: (key: number) => (item): boolean => key < item.length && key >= -item.length
});
