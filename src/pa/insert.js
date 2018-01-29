// @flow
import prep from '../internal/prep';

export default prep({
    name: 'insert',
    arr: (index: number, value: *) => (item: Array<*>): Array<*> => {
        let clone = [...item];
        clone.splice(index, 0, value);
        return clone;
    }
});
