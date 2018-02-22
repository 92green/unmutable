// @flow
import prep from './internal/prep';
import findKey from './findKey';

export default prep({
    immutable: 'keyOf',
    all: (value: *) => findKey(ii => ii === value)
});
