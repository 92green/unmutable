// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    n: 'find',
    i: 'find',
    _: (predicate: Function, context: *, notSetValue: * = undefined) => (value: Object): * => {
        let iterator = entries()(value);
        for(let [key, childValue] of iterator) {
            if(predicate(childValue, key, value)) {
                return childValue;
            }
        }
        return notSetValue;
    }
});
