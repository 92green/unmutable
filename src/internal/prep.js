// @flow
import {isImmutable} from './predicates';

export default (config: Object): Function => {
    let getFn = (key: string) => config[key];

    return (...args: *) => (item: *): * => {
        let all = getFn("all");
        if(all) {
            return all(...args)(item);
        }
        if(isImmutable(item)) {
            return item[config.name](...args);
        }
        if(Array.isArray(item)) {
            return getFn("arr")(...args)(item);
        }
        return getFn("obj")(...args)(item);
    };
};
