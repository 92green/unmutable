// @flow
import UnmutableWrapper from './UnmutableWrapper';
import Wrap from './Wrap';
import {AddMethods, Unwrap} from 'unmutable-core';

export default class UnmutableMapWrapper extends UnmutableWrapper {
    constructor(item: *) {
        super(item);
        AddMethods(this, item, Wrap);
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
