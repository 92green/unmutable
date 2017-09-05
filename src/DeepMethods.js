// @flow
type Updater = (value: *) => *;

export const hasIn = (_this: UnmutableWrapperType) => (keyPath: string[]): * => {
    var item = _this;
    for(let key of keyPath) {
        if(!item.isCollection() || !item.has(key)) {
            return false;
        }
        item = item.get(key);
    }
    return true;
};

export const getIn = (_this: UnmutableWrapperType, Wrap: Function) => (keyPath: string[], notFoundValue: * = undefined): * => {
    var item = _this;
    for(let key of keyPath) {
        if(!item.isCollection() || !item.has(key)) {
            return Wrap(notFoundValue);
        }
        item = item.get(key);
    }
    return item;
};

export const setIn = (_this: UnmutableWrapperType, Wrap: Function) => (keyPath: string[], value: *): UnmutableObjectWrapper => {
    for(var i = keyPath.length - 1; i >= 0; i--) {
        value = getIn(_this, Wrap)(keyPath.slice(0, i), {})
            .set(keyPath[i], value);

        if(i > 0) {
            value = value.done();
        }
    }
    return value;
};

export const updateIn = (_this: UnmutableWrapperType, Wrap: Function) => (keyPath: string[], notFoundOrUpdater: *, updater: ?Updater): UnmutableObjectWrapper => {
    var notFoundValue: * = undefined;
    if(updater) {
        notFoundValue = notFoundOrUpdater;
    } else {
        updater = notFoundOrUpdater;
    }

    if(!hasIn(_this)(keyPath)) {
        return _this;
    }

    var originalValue: * = getIn(_this, Wrap)(keyPath, notFoundValue);
    return setIn(_this, Wrap)(keyPath, updater(originalValue.done()));
};

export const deleteIn = (_this: UnmutableWrapperType, Wrap: Function) => (keyPath: string[]): UnmutableObjectWrapper => {
    return updateIn(_this, Wrap)(
        keyPath.slice(0, -1),
        ii => Wrap(ii).delete(keyPath[keyPath.length - 1]).done()
    );
};
