// @flow
import prep from './internal/unmutable';
import findLastKey from './findLastKey';

export default prep({
    n: 'lastKeyOf',
    i: 'lastKeyOf',
    _: (value: *) => findLastKey(ii => ii === value)
});
