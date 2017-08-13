import UnmutableWrapper from './UnmutableWrapper';

export default class UnmutableListWrapper extends UnmutableWrapper {
    get size() {
        return this.__item.size;
    }

    isIndexed() {
        return true;
    }
}
