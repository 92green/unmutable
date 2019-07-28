// @flow
import {replaceEqualDeep} from 'unmutable';
import {shallowEquals} from 'unmutable';

export default (fn: Function): Function => {
    let cachedInput;
    let cachedOutput;

    return (...args: Array<any>): any => {
        let hasCache = !!cachedInput;
        if(hasCache && shallowEquals(args)(cachedInput)) {
            return cachedOutput;
        }

        cachedInput = args;
        let lastOutput = cachedOutput;
        cachedOutput = fn(...args);

        return hasCache
            ? replaceEqualDeep(lastOutput)(cachedOutput)
            : cachedOutput;
    };
};
