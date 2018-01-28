// @flow
import prep from '../internal/prep';
import keys from './keys';

export default prep({
    all: () => (item: Array<*>): Array<*> => {
        let iterator = keys()(item);
        let keyArray = [];
        for(let key of iterator) {
            keyArray.push(key);
        }
        return keyArray;
    }
});
