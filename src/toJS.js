// @flow
import prep from './internal/prep';
import identity from './identity';

export default prep({
    name: "toJS",
    immutable: "toJS",
    all: () => identity()
});
