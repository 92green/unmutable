// @flow
import prep from './internal/prep';
import entriesReverse from './entriesReverse';

export default prep({
    name: 'findLast',
    immutable: 'findLast',
    all: (predicate: Function, context: *, notSetValue: * = undefined) => (value: Object): * => {
        let iterator = entriesReverse()(value);
        for(let [key, childValue] of iterator) {
            if(predicate(childValue, key, value)) {
                return childValue;
            }
        }
        return notSetValue;
    }
});
