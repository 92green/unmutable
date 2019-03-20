// @flow
import replaceEqualDeep from 'unmutable/lib/replaceEqualDeep';
import shallowEquals from 'unmutable/lib/shallowEquals';

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
