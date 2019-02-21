// @flow
import prep from './internal/unmutable';
import uniqueBy from './uniqueBy';

export default prep({
    name: 'unique',
    all: () => uniqueBy(_ => _)
});
