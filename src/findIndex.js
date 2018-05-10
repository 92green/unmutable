// @flow
import prep from './internal/prep';
import entries from './entries';

export default prep({
    name: 'findIndex',
    immutable: 'findIndex',
    all: (predicate: Function) => (value: Object): * => {
        let iterator = entries()(value);
        for(let [key, value] of iterator) {
            if(predicate(value, key, value)) {
                return key;
            }
        }
        return -1;
    }
});
