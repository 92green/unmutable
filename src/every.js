// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    name: 'every',
    immutable: 'every',
    all: (predicate: Function) => (value: Object): boolean => {
        let iterator = entries()(value);
        for(let [key, childValue] of iterator) {
            if(!predicate(childValue, key, value)) {
                return false;
            }
        }
        return true;
    }
});
