import UnmutableWrapper from './UnmutableWrapper';

export default class UnmutableMapWrapper extends UnmutableWrapper {
    get size() {
        return this.__item.size;
    }
}
