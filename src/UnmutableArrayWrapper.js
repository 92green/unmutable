// @flow
import {List} from 'immutable';
import UnmutableListWrapper from './UnmutableListWrapper';

export default class UnmutableArrayWrapper extends UnmutableListWrapper {

    constructor(item: *, options: Options = {}) {
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

        var _this = (this: any);

        _this.getIn = (keyPath: string[], notFoundValue: * = undefined): * => {
            for(let key of keyPath) {
                if(!item.has(key)) {
                    return notFoundValue;
                }
                item = item.get(key);
            }
            return item;
        };

        _this.setIn = (keyPath: string[], value: *): UnmutableArrayWrapper => {
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

        // also delete untested methods
        delete _this.zip;
        delete _this.zipWith;
        delete _this.groupBy;
        delete _this.interpose;
        delete _this.interleave;
        delete _this.splice;
        delete _this.flatten;
    }

    done(): * {
        return (this: any).__item.toArray();
    }
}
