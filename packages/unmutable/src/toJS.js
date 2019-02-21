// @flow
import prep from './internal/unmutable';
import identity from './identity';

export default prep({
    name: "toJS",
    immutable: "toJS",
    all: () => identity()
});
