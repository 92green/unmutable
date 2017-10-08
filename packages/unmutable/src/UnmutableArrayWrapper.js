// @flow
import {List} from 'immutable';
import UnmutableWrapper from './UnmutableWrapper';
import Wrap from './Wrap';
import {AddMethods} from 'unmutable-core';

export default class UnmutableArrayWrapper extends UnmutableWrapper {

    constructor(item: Object) {
        let list: List<*> = List(item);
        super(list);
        AddMethods({
            self: this,
            methodsFrom: list,
            wrap: Wrap,
            fromWrapperData: ii => ii.toArray(),
            additionalMethods: [
                "keyArray"
            ]
        });
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
