// @flow
import pipeWith from './pipeWith';

export default (condition: Function, ...funcs: Array<Function>) => (value: *): * => {
    if(funcs.length === 0 || !condition(value)) {
        return value;
    }
    return pipeWith(
        value,
        ...funcs
    );
};
