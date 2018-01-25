// @flow
import {isImmutable} from './predicates';

export default ({name, all, arr, obj}: Object): Function => {
    return (...args: *) => (item: *): * => {
        if(name && isImmutable(item)) { // if "name" is set and item is Immutable.js, call the Immutable.js function
            return item[name](...args);
        }
        if(all) { // else if "all" is set, call that for any type of thing
            return all(...args)(item);
        }
        if(Array.isArray(item)) { // else if "arr" is set and item is an array, call "arr"
            return arr(...args)(item);
        }
        return obj(...args)(item); // else call "obj"
    };
};
