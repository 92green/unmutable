// @flow
import prep from './internal/unmutable';
import equals from './equals';

export default prep({
    n: 'replaceEqual',
    _: (other: any) => (collection: *): * => {
        return equals(other)(collection) ? other : collection;
    }
});
