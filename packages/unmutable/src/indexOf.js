// @flow
import prep from './internal/unmutable';
import equals from './equals';
import findIndex from './findIndex';

export default prep({
    n: 'indexOf',
    i: 'indexOf',
    _: (searchValue: *) => findIndex(equals(searchValue))
});
