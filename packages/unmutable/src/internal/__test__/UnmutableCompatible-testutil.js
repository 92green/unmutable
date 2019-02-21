// @flow
import set from '../../set';
import del from '../../delete';
import entries from '../../entries';
import equals from '../../equals';

export default class UnmutableCompatible {
    constructor(props: * = {}) {
        this._data = props;
    }

    __UNMUTABLE_COMPATIBLE__ = true;
    _data: *;

    clear = (): UnmutableCompatible => new UnmutableCompatible();
    clone = (): UnmutableCompatible => new UnmutableCompatible(this._data);
    delete = (key: string): UnmutableCompatible => new UnmutableCompatible(del(key)(this._data));
    entries = () => entries()(this._data);
    equals = (other: any) => equals(other)(this._data);
    get = (key: string, notSetValue: *): * => this.has(key) ? this._data[key] : notSetValue;
    has = (key: string): boolean => this._data.hasOwnProperty(key);
    set = (key: string, childValue: *): UnmutableCompatible => new UnmutableCompatible(set(key, childValue)(this._data));
    toObject = (): * => this._data;
}
