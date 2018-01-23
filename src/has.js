// @flow
import prep from './internal/prep';

export default prep({
    name: 'has',
    obj: (key: string) => (item): boolean => item.hasOwnProperty(key),
    arr: (key: number) => (item): boolean => key < item.length && key >= -item.length
});
