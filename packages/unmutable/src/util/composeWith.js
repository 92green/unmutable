// @flow
import compose from './compose';
export default (...args: Array<*>): * => {
    let item = args.pop();
    return compose(...args)(item);
};
