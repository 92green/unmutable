// @flow
import prep from './internal/prep';
import uniqueBy from './uniqueBy';

export default prep({
    name: 'unique',
    all: () => uniqueBy(_ => _)
});
