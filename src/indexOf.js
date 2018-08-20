// @flow
import prep from './internal/prep';
import equals from './equals';
import findIndex from './findIndex';

export default prep({
    name: 'indexOf',
    immutable: 'indexOf',
    all: (searchValue: *) => findIndex(equals(searchValue))
});
