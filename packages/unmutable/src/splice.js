// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'splice',
    i: 'splice',
    a: (index: number, removeNum: number, ...values: Array<*>) => (value: Array<*>): Array<*> => {
        let cloned = [...value];
        cloned.splice(index, removeNum, ...values);
        return cloned;
    }
});
