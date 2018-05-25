// @flow
import prep from './internal/prep';
import identity from './identity';
import toObject from './toObject';

export default prep({
    name: "toKeyed",
    immutable: "toMap",
    object: () => identity(),
    array: toObject
});
