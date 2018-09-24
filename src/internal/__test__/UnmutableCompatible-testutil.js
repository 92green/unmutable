// @flow

export default class UnmutableCompatible {
    constructor(props: *) {
        this._data = props;
    }

    __UNMUTABLE_COMPATIBLE__ = true;
    _data: *;

    get = (key: string) => {
        return this._data[key];
    };
}
