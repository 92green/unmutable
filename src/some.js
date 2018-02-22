// @flow
import prep from './internal/prep';
import entries from './entries';

export default prep({
    immutable: 'some',
    all: (predicate: Function) => (item: Object): boolean => {
        let iterator = entries()(item);
        for(let [key, value] of iterator) {
            if(predicate(value, key, item)) {
                return true;
            }
        }
        return false;
    }
});
