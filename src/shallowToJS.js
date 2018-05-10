// @flow
import prep from './internal/prep';
import isImmutable from './util/isImmutable';
import isIndexed from './util/isIndexed';

export default prep({
    name: 'shallowToJS',
    all: () => (value: *): * => {
        if(!isImmutable(value)) {
            return value;
        }
        if(isIndexed(value)) {
            return value.toArray();
        }
        return value.toObject();
    }
});
