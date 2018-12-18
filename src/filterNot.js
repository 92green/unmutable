// @flow
import prep from './internal/unmutable';
import filter from './filter';

export default prep({
    name: 'filterNot',
    immutable: 'filterNot',
    all: (predicate: Function) => filter((...args) => !predicate(...args))
});
