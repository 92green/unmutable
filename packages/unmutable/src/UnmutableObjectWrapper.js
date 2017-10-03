// @flow
import {Map} from 'immutable';
import UnmutableWrapper from './UnmutableWrapper';
import Wrap from './Wrap';
import {AddMethods, CompositeMethods} from 'unmutable-core';
const {deleteIn, getIn, hasIn, setIn, updateIn} = CompositeMethods;

export default class UnmutableObjectWrapper extends UnmutableWrapper {
    constructor(item: Object) {
        let map: Map<string,*> = Map(item);
        super(map);

        // prepare methods
        AddMethods(this, map, Wrap, ii => ii.toObject());

        // define deep methods
        let _this = (this: any);
        _this.deleteIn = deleteIn(_this, Wrap);
        _this.hasIn = hasIn(_this, Wrap);
        _this.getIn = getIn(_this, Wrap);
        _this.setIn = setIn(_this, Wrap);
        _this.updateIn = updateIn(_this, Wrap);
    }

    get value(): * {
        return this.__item.toObject();
    }

    get size(): number {
        return this.__item.size;
    }

    isCollection(): boolean {
        return true;
    }

    isKeyed(): boolean {
        return true;
    }

    wrapperType(): string {
        return "UnmutableObjectWrapper";
    }
}
