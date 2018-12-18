// @flow
import prep from './internal/unmutable';
import findKey from './findKey';

export default prep({
    name: 'keyOf',
    immutable: 'keyOf',
    all: (value: *) => findKey(ii => ii === value)
});
