// @flow
import {Map} from 'immutable';
import UnmutableMapWrapper from './UnmutableMapWrapper';

export default class UnmutableObjectWrapper extends UnmutableMapWrapper {
    constructor(item: *, options: Options = {}) {
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

        var _this = (this: any);

        _this.getIn = (keyPath: string[], notFoundValue: * = undefined): * => {
            var item = _this;
            for(let key of keyPath) {
                if(!item.has(key)) {
                    return notFoundValue;
                }
                item = item.get(key);
            }
            return item;
        };

        _this.setIn = (keyPath: string[], value: *): UnmutableObjectWrapper => {
            for(var i = keyPath.length - 1; i >= 0; i--) {
                value = _this
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
        delete _this.mergeDeep;
        delete _this.mergeDeepWith;
        delete _this.deleteIn;
        delete _this.updateIn;
        delete _this.mergeIn;
        delete _this.mergeDeepIn;
    }

    done(): * {
        return this.__item.toObject();
    }
}
