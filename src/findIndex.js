// @flow
import prep from './internal/prep';
import entries from './entries';

export default prep({
    name: 'findIndex',
    immutable: 'findIndex',
    all: (predicate: Function) => (value: Object): * => {
        let iterator = entries()(value);
        for(let [key, childValue] of iterator) {
            if(predicate(childValue, key, value)) {
                return key;
            }
        }
        return -1;
    }
});
