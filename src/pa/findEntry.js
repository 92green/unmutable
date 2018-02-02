// @flow
import prep from '../internal/prep';
import entries from './entries';

export default prep({
    immutable: 'findEntry',
    all: (predicate: Function, context: *, notSetValue: * = undefined) => (item: Object): * => {
        let iterator = entries()(item);
        for(let entry of iterator) {
            let [key, value] = entry;
            if(predicate(value, key, item)) {
                return entry;
            }
        }
        return notSetValue;
    }
});
