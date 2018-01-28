// @flow
import prep from '../internal/prep';
import entries from './entries';

export default prep({
    name: 'find',
    all: (predicate: Function, context: *, notSetValue: * = undefined) => (item: Object): boolean => {
        let iterator = entries()(item);
        for(let [key, value] of iterator) {
            if(predicate(value, key, item)) {
                return value;
            }
        }
        return notSetValue;
    }
});
