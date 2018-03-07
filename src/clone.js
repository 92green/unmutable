// @flow
import prep from './internal/prep';
import identity from './identity';

export default prep({
    all: () => identity(),
    object: () => (item: Object): Object => ({...item}),
    array: () => (item: Array<*>): Array<*> => [...item]
});
