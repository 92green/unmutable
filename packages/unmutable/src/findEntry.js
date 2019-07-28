// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    n: 'findEntry',
    i: 'findEntry',
    _: (predicate: Function, context: *, notSetValue: * = undefined) => (value: Object): * => {
        let iterator = entries()(value);
        for(let entry of iterator) {
            let [key, childValue] = entry;
            if(predicate(childValue, key, value)) {
                return entry;
            }
        }
        return notSetValue;
    }
});
