// @flow
import prep from './internal/prep';
import filter from './filter';

export default prep({
    name: 'filterNot',
    immutable: 'filterNot',
    all: (predicate: Function) => filter((...args) => !predicate(...args))
});
