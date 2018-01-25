// @flow

export default (overloads: Object, ...innerArgs: *) => (...args: Object): * => {
    let fn = overloads[`${args.length}`];
    if(!fn) {
        throw new Error(`Function must be given this many arguments: ${Object.keys(overloads).join(", ")}`);
    }
    return fn(...innerArgs)(...args);
};
