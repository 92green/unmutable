// @flow
import prep from './internal/unmutable';
import takeUntil from './takeUntil';

export default prep({
    n: 'takeWhile',
    i: 'takeWhile',
    _: (predicate: Function) => takeUntil((...args) => !predicate(...args))
});
