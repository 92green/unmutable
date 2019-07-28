// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    n: 'findIndex',
    i: 'findIndex',
    _: (predicate: Function) => (value: Object): * => {
        let iterator = entries()(value);
        for(let [key, childValue] of iterator) {
            if(predicate(childValue, key, value)) {
                return key;
            }
        }
        return -1;
    }
});
