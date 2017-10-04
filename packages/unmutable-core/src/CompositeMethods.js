// @flow
type Updater = (value: *) => *;

const update = (_this: Object) => (key: *, ...args: *): Object => {
    let notSetValue: * = args.length > 1 ? args[0] : undefined;
    let updater: Updater = args[args.length - 1];

    return _this
        .set(
            key,
            updater(
                _this.get(key, notSetValue).value
            )
        );
};

const hasIn = (_this: Object) => (keyPath: string[]): boolean => {
    var item = _this;
    for(let key of keyPath) {
        if(/*!item.isCollection() || */ !item.has(key)) {
            return false;
        }
        item = item.get(key);
    }
    return true;
};

const getIn = (_this: Object, Wrap: Function) => (keyPath: string[], notFoundValue: * = undefined): Object => {
    var item = _this;
    for(let key of keyPath) {
        if(/*!item.isCollection() || */ !item.has(key)) {
            return Wrap(notFoundValue);
        }
        item = item.get(key);
    }
    return item;
};

const setIn = (_this: Object, Wrap: Function) => (keyPath: string[], value: *, notFoundValueCreator: Function = () => ({})): Object => {
    for(var i = keyPath.length - 1; i >= 0; i--) {
        const partialKeyPath = keyPath.slice(0, i);
        value = getIn(_this, Wrap)(partialKeyPath, notFoundValueCreator(partialKeyPath)).set(keyPath[i], value).value;
    }
    return Wrap(value);
};

const updateIn = (_this: Object, Wrap: Function) => (keyPath: string[], notFoundValue: *, updater: Updater, notFoundValueCreator: Function = () => ({})): Object => {
    var originalValue: * = getIn(_this, Wrap)(keyPath, notFoundValue);
    return setIn(_this, Wrap)(keyPath, updater(originalValue.value), notFoundValueCreator);
};

const deleteIn = (_this: Object, Wrap: Function) => (keyPath: string[]): Object => {
    if(keyPath.length === 0) {
        return Wrap(undefined);
    }
    if(!hasIn(_this, Wrap)(keyPath)) {
        return _this;
    }
    return updateIn(_this, Wrap)(
        keyPath.slice(0, -1),
        undefined,
        (ii) => Wrap(ii).delete(keyPath[keyPath.length - 1]).value
    );
};

const methods = {
    deleteIn,
    getIn,
    hasIn,
    setIn,
    update,
    updateIn
};

export default methods;
