// @flow
import prep from './internal/prep';
import entriesReverse from './entriesReverse';

export default prep({
    immutable: 'findLast',
    all: (predicate: Function, context: *, notSetValue: * = undefined) => (item: Object): * => {
        let iterator = entriesReverse()(item);
        for(let [key, value] of iterator) {
            if(predicate(value, key, item)) {
                return value;
            }
        }
        return notSetValue;
    }
});