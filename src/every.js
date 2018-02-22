// @flow
import prep from './internal/prep';
import entries from './entries';

export default prep({
    immutable: 'every',
    all: (predicate: Function) => (item: Object): boolean => {
        let iterator = entries()(item);
        for(let [key, value] of iterator) {
            if(!predicate(value, key, item)) {
                return false;
            }
        }
        return true;
    }
});
