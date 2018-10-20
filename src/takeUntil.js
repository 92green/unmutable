// @flow
import prep from './internal/prep';
import clear from './clear';
import entries from './entries';

export default prep({
    name: 'takeUntil',
    immutable: 'takeUntil',
    all: (predicate: Function) => (value: *): * => {
        let result = clear()(value);
        let iterator = entries()(value);
        for(let [key, childValue] of iterator) {
            if(predicate(childValue, key, value)) {
                continue;
            }
            result[key] = childValue;
        }
        return result;
    }
});
