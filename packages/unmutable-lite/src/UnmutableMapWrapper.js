// @flow
import UnmutableWrapper from './UnmutableWrapper';
import {AddMethods} from 'unmutable-core';
import Wrap from './Wrap';

export default class UnmutableMapWrapper extends UnmutableWrapper {
    constructor(item: *) {
        super(item);
        AddMethods({
            self: this,
            methodsFrom: item,
            wrap: Wrap
        });
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
        return "UnmutableMapWrapper";
    }
}
