// @flow
import prep from '../internal/prep';
import entriesReverse from './entriesReverse';

export default prep({
    name: 'findLast',
    all: (predicate: Function, context: *, notSetValue: * = undefined) => (item: Object): boolean => {
        let iterator = entriesReverse()(item);
        for(let [key, value] of iterator) {
            if(predicate(value, key, item)) {
                return value;
            }
        }
        return notSetValue;
    }
});
