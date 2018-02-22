// @flow
import prep from './internal/prep';
import findLastKey from './findLastKey';

export default prep({
    immutable: 'lastKeyOf',
    all: (value: *) => findLastKey(ii => ii === value)
});
