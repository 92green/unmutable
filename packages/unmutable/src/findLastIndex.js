// @flow
import prep from './internal/unmutable';
import entriesReverse from './entriesReverse';

export default prep({
    n: 'findLastIndex',
    i: 'findLastIndex',
    _: (predicate: Function) => (value: Object): * => {
        let iterator = entriesReverse()(value);
        for(let [key, value] of iterator) {
            if(predicate(value, key, value)) {
                return key;
            }
        }
        return -1;
    }
});
