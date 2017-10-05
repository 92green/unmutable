// @flow
import {Map} from 'immutable';
import UnmutableWrapper from './UnmutableWrapper';
import Wrap from './Wrap';
import {AddMethods} from 'unmutable-core';

export default class UnmutableObjectWrapper extends UnmutableWrapper {
    constructor(item: Object) {
        let map: Map<string,*> = Map(item);
        super(map);
        AddMethods({
            self: this,
            methodsFrom: map,
            wrap: Wrap,
            fromWrapperData: ii => ii.toObject()
        });
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
