// @flow

export default (overloads: Object) => (...args: Array<*>): * => {
    let fn = overloads[`${args.length}`];
    if(!fn) {
        throw new Error(`Function must be given this many arguments: ${Object.keys(overloads).join(", ")}`);
    }
    return fn(...args);
};
