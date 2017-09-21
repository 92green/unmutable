// @flow
import {List} from 'immutable';
import UnmutableWrapper from './UnmutableWrapper';
import Wrap from './Wrap';
import {CreateMethodConstructors, CompositeMethods} from 'unmutable-core';
const {deleteIn, getIn, hasIn, setIn, updateIn} = CompositeMethods;

export default class UnmutableArrayWrapper extends UnmutableWrapper {

    constructor(item: Object) {
        let list: List<*> = List(item);
        super(list);

        // wrap shallow methods in constructors
        this._addMethods(
            list,
            CreateMethodConstructors(Wrap, ii => new UnmutableArrayWrapper(ii))
        );

        // define deep methods
        let _this = (this: any);
        _this.deleteIn = deleteIn(_this, Wrap);
        _this.hasIn = hasIn(_this, Wrap);
        _this.getIn = getIn(_this, Wrap);
        _this.setIn = setIn(_this, Wrap);
        _this.updateIn = updateIn(_this, Wrap);
    }

    get value(): * {
        return (this: any).__item.toArray();
    }

    get size(): number {
        return this.__item.size;
    }

    isCollection(): boolean {
        return true;
    }

    isIndexed(): boolean {
        return true;
    }

    wrapperType(): string {
        return "UnmutableArrayWrapper";
    }
}
