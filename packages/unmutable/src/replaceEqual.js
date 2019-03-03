// @flow
import prep from './internal/unmutable';
import equals from './equals';

export default prep({
    name: 'replaceEqual',
    all: (other: any) => (collection: *): * => {
        return equals(other)(collection) ? other : collection;
    }
});
