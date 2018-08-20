// @flow
import prep from './internal/prep';
import hashCode from './hashCode';
import every from './every';
import filter from './filter';
import notEquals from './notEquals';

export default prep({
    name: 'uniqueBy',
    all: (getter: Function): Function => {
        let hashes = {};
        let values = [];
        return filter((value: *, key: *, iter: *): boolean => {
            let gotten = getter(value, key, iter);
            let hash = hashCode()(gotten);
            let isUnique = false;

            if(!hashes[hash]) {
                isUnique = true;
            } else {
                // if hash does already exist, its still not guaranteed
                // that the current value has already been included in the output
                // so all previous values must be checked deeply
                isUnique = every(notEquals(gotten))(values);
            }

            if(isUnique) {
                hashes[hash] = true;
                values.push(gotten);
                return true;
            }
            return false;
        });
    }
});
