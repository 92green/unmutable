// @flow
import prep from './internal/unmutable';
import filter from './filter';

export default prep({
    n: 'filterNot',
    i: 'filterNot',
    _: (predicate: Function) => filter((...args) => !predicate(...args))
});
