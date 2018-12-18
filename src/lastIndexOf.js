// @flow
import prep from './internal/unmutable';
import equals from './equals';
import findLastIndex from './findLastIndex';

export default prep({
    name: 'lastIndexOf',
    immutable: 'lastIndexOf',
    all: (searchValue: *) => findLastIndex(equals(searchValue))
});
