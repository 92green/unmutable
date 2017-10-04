// @flow
import {Map} from 'immutable';
import UnmutableWrapper from './UnmutableWrapper';
import {AddMethods} from 'unmutable-core';
import Wrap from './Wrap';

export default class UnmutableListWrapper extends UnmutableWrapper {
    constructor(item: *) {
        super(item);
        AddMethods({
            self: this,
            methodsFrom: item,
            wrap: Wrap,
            toWrapperData: Map
        });
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
        return "UnmutableListWrapper";
    }
}
