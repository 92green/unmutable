// @flow
import isImmutable from '../util/isImmutable';
import isRecord from '../util/isRecord';

const getName = (name: ?string): string => name ? `${name}()` : `function`;

const noMethodError = (name: ?string) => {
    throw new Error(`Evaluation of ${getName(name)} failed: method doesn't exist`);
};

export default (config: Object): Function => {
    let {immutable} = config;

    return (...args: *) => (item: *): * => {
        if(isRecord(item)) {
            return callRecord(config, args, item);
        }
        if(isImmutable(item)) {
            return callImmutable(config, args, item);
        }
        if(Array.isArray(item)) {
            return callArray(config, args, item);
        }
        if(typeof item === "object") {
            return callObject(config, args, item);
        }
        throw new Error(`Evaluation of ${getName(immutable)} failed: Value is invalid ${item}`);
    };
};

const callImmutable = ({immutable, all}: Object, args: *, item: *): * => {
    if(immutable) {
        if(!item[immutable]) {
            noMethodError(immutable);
        }
        return item[immutable](...args);
    }
    if(all) {
        return all(...args)(item);
    }
    noMethodError(immutable);
};

const callRecord = ({immutable, record, keyed, all}: Object, args: *, item: *): * => {
    if(record) {
        return record(...args)(item);
    }
    if(keyed) {
        return keyed(...args)(item);
    }
    if(all) {
        return all(...args)(item);
    }
    noMethodError(immutable);
};

const callArray = ({immutable, array, all}: Object, args: *, item: *): * => {
    if(array) {
        return array(...args)(item);
    }
    if(all) {
        return all(...args)(item);
    }
    noMethodError(immutable);
};

const callObject = ({immutable, keyed, object, all}: Object, args: *, item: *): * => {
    if(object) {
        return object(...args)(item);
    }
    if(keyed) {
        return keyed(...args)(item);
    }
    if(all) {
        return all(...args)(item);
    }
    noMethodError(immutable);
};
