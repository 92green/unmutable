// @flow
import prep from './internal/unmutable';
import equals from './equals';
import some from './some';

export default prep({
    n: 'includes',
    i: 'includes',
    _: (comparisonValue: *) => some(equals(comparisonValue))
});
