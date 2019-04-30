// @flow
import prep from './internal/unmutable';
import equals from './equals';
import equalsType from './equalsType';
import get from './get';
import map from './map';
import pipeWith from './pipeWith';
import isWriteable from './isWriteable';

const replaceEqualDeep = (other: any) => (collection: *): * => {
    if(equals(other)(collection)) {
        return other;
    }
    if(!isWriteable(collection) || !equalsType(other)(collection)) {
        return collection;
    }
    return pipeWith(
        collection,
        map((child, key) => {
            let otherChild = get(key)(other);
            return replaceEqualDeep(otherChild)(child);
        })
    );
};

export default prep({
    name: 'replaceEqualDeep',
    all: replaceEqualDeep
});
