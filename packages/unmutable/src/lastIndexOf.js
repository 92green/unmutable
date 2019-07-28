// @flow
import prep from './internal/unmutable';
import equals from './equals';
import findLastIndex from './findLastIndex';

export default prep({
    n: 'lastIndexOf',
    i: 'lastIndexOf',
    _: (searchValue: *) => findLastIndex(equals(searchValue))
});
