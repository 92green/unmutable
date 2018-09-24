// @flow

export default class UnmutableCompatible {
    constructor(props: *) {
        this._data = props;
    }

    __UNMUTABLE_COMPATIBLE__ = true;
    _data: *;

    has = (key: string): boolean => this._data.hasOwnProperty(key);
    get = (key: string, notSetValue: *): * => this.has(key) ? this._data[key] : notSetValue;
    set = (key: string, childValue: *): UnmutableCompatible => {
        return new UnmutableCompatible({
            ...this._data,
            [key]: childValue
        });
    };
    toObject = (): * => this._data;
}
