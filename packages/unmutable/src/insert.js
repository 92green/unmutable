// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'insert',
    i: 'insert',
    a: (index: number, childValue: *) => (value: Array<*>): Array<*> => {
        let clone = [...value];
        clone.splice(index, 0, childValue);
        return clone;
    }
});
