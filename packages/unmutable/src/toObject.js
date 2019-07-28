// @flow
import prep from './internal/unmutable';
import identity from './identity';
import reduce from './reduce';

export default prep({
    n: 'toObject',
    i: 'toObject',
    o: identity,
    a: () => reduce((obj: Object, value: *, index: number) => ({
        ...obj,
        [index]: value
    }), {})
});
