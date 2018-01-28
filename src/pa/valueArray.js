// @flow
import prep from '../internal/prep';
import values from './values';

export default prep({
    all: () => (item: Array<*>): Array<*> => {
        let iterator = values()(item);
        let valueArray = [];
        for(let key of iterator) {
            valueArray.push(key);
        }
        return valueArray;
    }
});
