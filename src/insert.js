// @flow
import prep from './internal/prep';

export default prep({
    name: 'insert',
    immutable: 'insert',
    array: (index: number, childValue: *) => (value: Array<*>): Array<*> => {
        let clone = [...value];
        clone.splice(index, 0, childValue);
        return clone;
    }
});
