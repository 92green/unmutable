// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'splice',
    immutable: 'splice',
    array: (index: number, removeNum: number, ...values: Array<*>) => (value: Array<*>): Array<*> => {
        let cloned = [...value];
        cloned.splice(index, removeNum, ...values);
        return cloned;
    },
    ap: true,
    of: true
});
