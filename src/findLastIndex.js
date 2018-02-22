// @flow
import prep from './internal/prep';
import entriesReverse from './entriesReverse';

export default prep({
    immutable: 'findLastIndex',
    all: (predicate: Function) => (item: Object): * => {
        let iterator = entriesReverse()(item);
        for(let [key, value] of iterator) {
            if(predicate(value, key, item)) {
                return key;
            }
        }
        return -1;
    }
});
