// @flow
import prep from './internal/unmutable';
import identity from './identity';
import toObject from './toObject';

export default prep({
    name: "toKeyed",
    immutable: "toMap",
    object: () => identity(),
    array: toObject
});
