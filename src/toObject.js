// @flow
import prep from './internal/prep';
import identity from './identity';
import reduce from './reduce';

export default prep({
    immutable: "toObject",
    object: () => identity(),
    array: () => reduce((obj: Object, value: *, index: number) => ({
        ...obj,
        [index]: value
    }), {})
});
