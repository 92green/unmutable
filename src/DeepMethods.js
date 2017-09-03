// @flow
export const getIn = (_this: UnmutableWrapperType, Wrap: Function) => (keyPath: string[], notFoundValue: * = undefined): * => {
    var item = _this;
    for(let key of keyPath) {
        if(!item.isKeyed() || !item.has(key)) {
            return Wrap(notFoundValue);
        }
        item = item.get(key);
    }
    return item;
};

export const setIn = (_this: UnmutableWrapperType) => (keyPath: string[], value: *): UnmutableObjectWrapper => {
    for(var i = keyPath.length - 1; i >= 0; i--) {
        value = _this
            .getIn(keyPath.slice(0, i), {})
            .set(keyPath[i], value);

        if(i > 0) {
            value = value.done();
        }
    }
    return value;
};
