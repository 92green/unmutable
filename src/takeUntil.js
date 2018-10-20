// @flow
import prep from './internal/prep';
import findIndex from './findIndex';
import slice from './slice';

export default prep({
    name: 'takeUntil',
    immutable: 'takeUntil',
    array: (predicate: Function) => (value: *): * => {
        let index: number = findIndex(predicate)(value);
        if(index === -1) {
            return value;
        }
        return slice(0, index)(value);
    }
});
