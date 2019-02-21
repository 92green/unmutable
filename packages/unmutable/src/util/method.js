// @flow

export default (method: string) => (...args: *) => (item: *) => item[method](...args);
