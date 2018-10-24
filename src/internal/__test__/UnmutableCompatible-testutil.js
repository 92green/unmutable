// @flow
import set from '../../set';
import del from '../../delete';
import entries from '../../entries';

export default class UnmutableCompatible {
    constructor(props: * = {}) {
        this._data = props;
    }

    __UNMUTABLE_COMPATIBLE__ = true;
    _data: *;

    has = (key: string): boolean => this._data.hasOwnProperty(key);
    get = (key: string, notSetValue: *): * => this.has(key) ? this._data[key] : notSetValue;
    set = (key: string, childValue: *): UnmutableCompatible => new UnmutableCompatible(set(key, childValue)(this._data));
    delete = (key: string): UnmutableCompatible => new UnmutableCompatible(del(key)(this._data));
    clear = (): UnmutableCompatible => new UnmutableCompatible();
    clone = (): UnmutableCompatible => new UnmutableCompatible(this._data);
    entries = () => entries()(this._data);
    toObject = (): * => this._data;
}
