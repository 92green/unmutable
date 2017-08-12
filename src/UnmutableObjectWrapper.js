import {Map} from 'immutable';
import UnmutableMapWrapper from './UnmutableMapWrapper';

export default class UnmutableObjectWrapper extends UnmutableMapWrapper {
    constructor(item, options) {
        const obj = ii => new UnmutableObjectWrapper(ii);

        const methodConstructors = {
            set: obj,
            delete: obj,
            deleteAll: obj,
            clear: obj,
            update: obj,
            merge: obj,
            mergeWith: obj,
            concat: obj,
            map: obj,
            mapKeys: obj,
            mapEntries: obj,
            flatMap: obj,
            filter: obj,
            filterNot: obj,
            reverse: obj,
            sort: obj,
            sortBy: obj
        };

        super(Map(item), {methodConstructors}, options);

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
    }

    done() {
        return this.__item.toObject();
    }
}
