// @flow
import prep from './internal/prep';
import entries from './entries';

export default prep({
    name: 'some',
    immutable: 'some',
    all: (predicate: Function) => (value: Object): boolean => {
        let iterator = entries()(value);
        for(let [key, childValue] of iterator) {
            if(predicate(childValue, key, value)) {
                return true;
            }
        }
        return false;
    }
});
