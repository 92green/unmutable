// @flow
import prep from './internal/unmutable';
import identity from './identity';
import reduce from './reduce';

export default prep({
    name: "toObject",
    immutable: "toObject",
    object: () => identity(),
    array: () => reduce((obj: Object, value: *, index: number) => ({
        ...obj,
        [index]: value
    }), {}),
    ap: true
});
