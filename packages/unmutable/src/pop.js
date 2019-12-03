// @flow
import prep from './internal/unmutable';
import slice from './slice';

export default prep({
    name: 'pop',
    immutable: 'pop',
    array: () => slice(0, -1),
    ap: true,
    of: true
});
