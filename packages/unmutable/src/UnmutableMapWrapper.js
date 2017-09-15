// @flow
import UnmutableWrapper from './UnmutableWrapper';

export default class UnmutableMapWrapper extends UnmutableWrapper {
    constructor(item: *) {
        super(item);
        this._addMethods(item);
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
