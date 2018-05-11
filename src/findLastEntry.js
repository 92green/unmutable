// @flow
import prep from './internal/prep';
import entriesReverse from './entriesReverse';

export default prep({
    name: 'findLastEntry',
    immutable: 'findLastEntry',
    all: (predicate: Function, context: *, notSetValue: * = undefined) => (value: Object): * => {
        let iterator = entriesReverse()(value);
        for(let entry of iterator) {
            let [key, childValue] = entry;
            if(predicate(childValue, key, value)) {
                return entry;
            }
        }
        return notSetValue;
    }
});
