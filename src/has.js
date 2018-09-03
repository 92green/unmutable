// @flow
import prep from './internal/prep';

export default prep({
    name: 'has',
    immutable: 'has',
    record: 'has',
    object: (key: string) => (value): boolean => key in value,
    array: (key: number) => (value): boolean => key < value.length && key >= -value.length
});
