// @flow
import prep from '../internal/prep';
import identity from './identity';

export default prep({
    name: "toJS",
    all: () => identity(),
    returnsSelf: false
});
