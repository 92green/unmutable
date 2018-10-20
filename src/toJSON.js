// @flow
import prep from './internal/prep';
import identity from './identity';

export default prep({
    name: "toJSON",
    immutable: "toJSON",
    all: () => identity()
});
