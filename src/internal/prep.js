// @flow
import {isImmutable} from 'immutable';

export default (config: Object): Function => {
    let getFn = (key: string) => config[key] || config['any'];

    return (...args: *) => (item): * => {
        if(isImmutable(item)) {
            return item[config.name](...args);
        }
        if(Array.isArray(item)) {
            return getFn("arr")(...args)(item);
        }
        return getFn("obj")(...args)(item);
    };
};
