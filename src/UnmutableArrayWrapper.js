import {List} from 'immutable';
import UnmutableListWrapper from './UnmutableListWrapper';

export default class UnmutableArrayWrapper extends UnmutableListWrapper {
    constructor(item, options) {
        const arr = ii => new UnmutableArrayWrapper(ii);

        const methodConstructors = {
            set: arr,
            delete: arr,
            insert: arr,
            clear: arr,
            push: arr,
            pop: arr,
            unshift: arr,
            shift: arr,
            update: arr,
            merge: arr,
            mergeWith: arr,
            concat: arr,
            map: arr,
            flatMap: arr,
            filter: arr,
            filterNot: arr,
            reverse: arr,
            sort: arr,
            sortBy: arr
        };

        super(List(item), {methodConstructors}, options);

        this.getIn = (keyPath, notFoundValue = undefined) => {
            var item = this;
            for(let key of keyPath) {
                if(!item.has(key)) {
                    return notFoundValue;
                }
                item = item.get(key);
            }
            return item;
        };

        this.setIn = (keyPath, value) => {
            for(var i = keyPath.length - 1; i >= 0; i--) {
                value = this
                    .getIn(keyPath.slice(0, i))
                    .set(keyPath[i], value);

                if(i > 0) {
                    value = value.done();
                }
            }
            return value;
        };

        // remove deep operations
        // rewrite them in future
        delete this.mergeDeep;
        delete this.mergeDeepWith;
        delete this.deleteIn;
        delete this.updateIn;
        delete this.mergeIn;
        delete this.mergeDeepIn;

        // also delete untested methods
        delete this.zip;
        delete this.zipWith;
        delete this.groupBy;
        delete this.interpose;
        delete this.interleave;
        delete this.splice;
        delete this.flatten;
    }

    done() {
        return this.__item.toArray();
    }
}
