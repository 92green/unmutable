// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    n: 'every',
    i: 'every',
    _: (predicate: Function) => (value: Object): boolean => {
        let iterator = entries()(value);
        for(let [key, childValue] of iterator) {
            if(!predicate(childValue, key, value)) {
                return false;
            }
        }
        return true;
    }
});
