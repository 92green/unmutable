// @flow
import prep from './internal/prep';
import takeUntil from './takeUntil';

export default prep({
    name: 'takeWhile',
    immutable: 'takeWhile',
    all: (predicate: Function) => takeUntil((...args) => !predicate(...args))
});
