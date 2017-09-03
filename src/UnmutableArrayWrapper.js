// @flow
import {List} from 'immutable';
import UnmutableListWrapper from './UnmutableListWrapper';
import Wrap from './Wrap';
import {getIn, setIn} from './DeepMethods';

export default class UnmutableArrayWrapper extends UnmutableListWrapper {

    constructor(item: *, options: Options = {}) {
        const self = ii => new UnmutableArrayWrapper(ii);
        const plain = ii => ii;
        const wrapped = Wrap;

        const methodConstructors = {
            clear: self,
            concat: self,
            delete: self,
            every: plain,
            filter: self,
            filterNot: self,
            flatMap: self,
            get: wrapped,
            getIn: wrapped,
            has: plain,
            hasIn: plain,
            insert: self,
            interleave: self,
            interpose: self,
            isEmpty: plain,
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
            update: self
        };

        super(List(item), {methodConstructors}, options);

        var _this = (this: any);
        _this.getIn = getIn(_this, Wrap);
        _this.setIn = setIn(_this, Wrap);
    }

    done(): * {
        return (this: any).__item.toArray();
    }
}
