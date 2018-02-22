// @flow
import prep from './internal/prep';
import identity from './identity';

export default prep({
    immutable: "toJS",
    all: () => identity()
});
