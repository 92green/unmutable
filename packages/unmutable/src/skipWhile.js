// @flow
import prep from './internal/unmutable';
import skipUntil from './skipUntil';

export default prep({
    n: 'skipWhile',
    i: 'skipWhile',
    _: (predicate: Function) => skipUntil((...args) => !predicate(...args))
});
