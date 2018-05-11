// @flow
import prep from './internal/prep';

export default prep({
    name: 'merge',
    immutable: 'merge',
    object: (newValue: Object) => (value): Object => ({...value, ...newValue}),
    array: (newValue: Array<*>) => (value: Array<*>): Array<*> => [...value, ...newValue]
});
