// @flow
import {List} from 'immutable';
import UnmutableListWrapper from './UnmutableListWrapper';
import Wrap from './Wrap';
import {deleteIn, getIn, hasIn, setIn, updateIn} from './DeepMethods';

export default class UnmutableArrayWrapper extends UnmutableListWrapper {

    constructor(item: *, options: Options = {}) {
        const self = ii => new UnmutableArrayWrapper(ii);
        const plain = ii => ii;
        const wrapped = Wrap;

        const methodConstructors = {
            clear: self,
            concat: self,
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
            insert: self,
            interleave: self,
            interpose: self,
            isEmpty: plain,
            last: wrapped,
            map: self,
            merge: self,
            mergeWith: self,
            pop: self,
            push: self,
            reverse: self,
            set: self,
            setIn: self,
            shift: self,
            some: plain,
            sort: self,
            sortBy: self,
            unshift: self,
            update: self,
            updateIn: self
        };

        super(List(item), {methodConstructors}, options);

        var _this = (this: any);
        _this.deleteIn = deleteIn(_this, Wrap);
        _this.hasIn = hasIn(_this, Wrap);
        _this.getIn = getIn(_this, Wrap);
        _this.setIn = setIn(_this, Wrap);
        _this.updateIn = updateIn(_this, Wrap);
    }

    done(): * {
        return (this: any).__item.toArray();
    }
}
