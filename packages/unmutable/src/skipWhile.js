// @flow
import prep from './internal/unmutable';
import skipUntil from './skipUntil';

export default prep({
    name: 'skipWhile',
    immutable: 'skipWhile',
    all: (predicate: Function) => skipUntil((...args) => !predicate(...args))
});
