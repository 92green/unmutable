// @flow
import prep from './internal/unmutable';
import entriesReverse from './entriesReverse';

export default prep({
    name: 'findLastKey',
    immutable: 'findLastKey',
    all: (predicate: Function) => (value: Object): * => {
        let iterator = entriesReverse()(value);
        for(let [key, childValue] of iterator) {
            if(predicate(childValue, key, value)) {
                return key;
            }
        }
        return undefined;
    }
});
