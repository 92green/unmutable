// @flow
import prep from '../internal/prep';
import findLastKey from './findLastKey';

export default prep({
    name: 'lastKeyOf',
    all: (value: *) => findLastKey(ii => ii === value)
});
