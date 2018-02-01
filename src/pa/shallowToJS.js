// @flow
import prep from '../internal/prep';
import isImmutable from '../util/isImmutable';
import isIndexed from '../util/isIndexed';

export default prep({
    all: () => (item: *): * => {
        if(!isImmutable(item)) {
            return item;
        }
        if(isIndexed(item)) {
            return item.toArray();
        }
        return item.toObject();
    },
    returnsSelf: false
});
