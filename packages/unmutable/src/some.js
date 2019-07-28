// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    n: 'some',
    i: 'some',
    _: (predicate: Function) => (value: Object): boolean => {
        let iterator = entries()(value);
        for(let [key, childValue] of iterator) {
            if(predicate(childValue, key, value)) {
                return true;
            }
        }
        return false;
    }
});
