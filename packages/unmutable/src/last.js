// @flow
import prep from './internal/unmutable';
import get from './get';
import valueArray from './valueArray';
import pipe from './util/pipe';

export default prep({
    n: 'last',
    i: 'last',
    a: () => get(-1),
    _: () => pipe(
        valueArray(),
        get(-1)
    )
});
