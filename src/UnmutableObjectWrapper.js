// @flow
import {Map} from 'immutable';
import UnmutableMapWrapper from './UnmutableMapWrapper';
import Wrap from './Wrap';
import {deleteIn, getIn, hasIn, setIn, updateIn} from './DeepMethods';

export default class UnmutableObjectWrapper extends UnmutableMapWrapper {
    constructor(item: *, options: Options = {}) {
        const self = ii => new UnmutableObjectWrapper(ii);
        const plain = ii => ii;
        const wrapped = Wrap;

        const methodConstructors = {
            butLast: self,
            clear: self,
            concat: self,
            count: plain,
            delete: self,
            deleteIn: self,
            every: plain,
            filter: self,
            filterNot: self,
            first: wrapped,
            flatMap: self,
            get: wrapped,
            getIn: wrapped,
            has: plain,
            hasIn: plain,
            includes: plain,
            isEmpty: plain,
            last: wrapped,
            map: self,
            mapEntries: self,
            mapKeys: self,
            merge: self,
            mergeWith: self,
            reverse: self,
            rest: self,
            set: self,
            setIn: self,
            skip: self,
            skipLast: self,
            skipUntil: self,
            skipWhile: self,
            slice: self,
            some: plain,
            sort: self,
            sortBy: self,
            take: self,
            takeLast: self,
            takeUntil: self,
            takeWhile: self,
            update: self,
            updateIn: self
        };

        super(Map(item), {methodConstructors}, options);

        var _this = (this: any);
        _this.deleteIn = deleteIn(_this, Wrap);
        _this.hasIn = hasIn(_this, Wrap);
        _this.getIn = getIn(_this, Wrap);
        _this.setIn = setIn(_this, Wrap);
        _this.updateIn = updateIn(_this, Wrap);
    }

    done(): * {
        return this.__item.toObject();
    }
}
