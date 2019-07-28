// @flow
import prep from './internal/unmutable';
import uniqueBy from './uniqueBy';

export default prep({
    n: 'unique',
    _: () => uniqueBy(_ => _)
});
