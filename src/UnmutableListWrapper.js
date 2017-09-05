// @flow
import UnmutableWrapper from './UnmutableWrapper';

export default class UnmutableListWrapper extends UnmutableWrapper {
    get size(): number {
        return this.__item.size;
    }

    isCollection(): boolean {
        return true;
    }

    isIndexed(): boolean {
        return true;
    }
}
