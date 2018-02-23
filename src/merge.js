// @flow
import prep from './internal/prep';

export default prep({
    immutable: 'merge',
    object: (newItem: Object) => (item): Object => ({...item, ...newItem}),
    array: (newItem: Array<*>) => (item: Array<*>): Array<*> => [...item, ...newItem]
});
