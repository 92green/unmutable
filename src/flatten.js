// @flow
import prep from './internal/unmutable';
import clear from './clear';
import pick from './pick';
import merge from './merge';
import reduce from './reduce';
import pipeWith from './util/pipeWith';
import isValueObject from './util/isValueObject';

let getDepth = (depthOrShallow: ?boolean|number): number => {
    if(!depthOrShallow) {
        return Number.POSITIVE_INFINITY;
    }
    if(depthOrShallow === true) {
        return 1;
    }
    return depthOrShallow;
};

export default prep({
    name: 'flatten',
    immutable: 'flatten',
    all: (depthOrShallow: ?boolean|number): Function => (value: *): * => {
        let depth: number = getDepth(depthOrShallow);

        for(let i = 0; i < depth; i++) {
            let hasGrandchildren = false;
            value = pipeWith(
                value,
                reduce(
                    (reduced, child, key) => {
                        let toMerge;
                        if(isValueObject(child)) {
                            toMerge = child;
                            hasGrandchildren = true;
                        } else {
                            toMerge = pick([key])(value);
                        }
                        return merge(toMerge)(reduced);
                    },
                    clear()(value)
                )
            );
            if(!hasGrandchildren) {
                break;
            }
        }

        return value;
    }
});
