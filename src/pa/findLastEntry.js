// @flow
import prep from '../internal/prep';
import entriesReverse from './entriesReverse';

export default prep({
    name: 'findLastEntry',
    all: (predicate: Function, context: *, notSetValue: * = undefined) => (item: Object): * => {
        let iterator = entriesReverse()(item);
        for(let entry of iterator) {
            let [key, value] = entry;
            if(predicate(value, key, item)) {
                return entry;
            }
        }
        return notSetValue;
    }
});
