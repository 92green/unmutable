// @flow
import prep from './internal/unmutable';
import findKey from './findKey';

export default prep({
    n: 'keyOf',
    i: 'keyOf',
    _: (value: *) => findKey(ii => ii === value)
});
