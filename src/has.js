// @flow
import prep from './internal/prep';

export const objectHas = (key: string) => (value: *): boolean => key in value;
export const arrayHas = (key: number) => (value: Array<*>): boolean => key < value.length && key >= -value.length;

export default prep({
    name: 'has',
    immutable: 'has',
    record: 'has',
    object: objectHas,
    array: arrayHas
});
