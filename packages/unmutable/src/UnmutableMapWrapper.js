// @flow
import UnmutableWrapper from './UnmutableWrapper';

export default class UnmutableMapWrapper extends UnmutableWrapper {
    get size(): number {
        return this.__item.size;
    }

    isCollection(): boolean {
        return true;
    }

    isKeyed(): boolean {
        return true;
    }
}
