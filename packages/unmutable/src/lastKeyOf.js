// @flow
import prep from './internal/unmutable';
import findLastKey from './findLastKey';

export default prep({
    name: 'lastKeyOf',
    immutable: 'lastKeyOf',
    all: (value: *) => findLastKey(ii => ii === value)
});
