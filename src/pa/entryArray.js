// @flow
import prep from '../internal/prep';
import entries from './entries';

export default prep({
    all: () => (item: Array<*>): Array<*> => {
        let iterator = entries()(item);
        let entryArray = [];
        for(let key of iterator) {
            entryArray.push(key);
        }
        return entryArray;
    }
});
