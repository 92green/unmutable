// @flow
import prep from './internal/prep';
import entries from './entries';

export default prep({
    immutable: 'findIndex',
    all: (predicate: Function) => (item: Object): * => {
        let iterator = entries()(item);
        for(let [key, value] of iterator) {
            if(predicate(value, key, item)) {
                return key;
            }
        }
        return -1;
    }
});
