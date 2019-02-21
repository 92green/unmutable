// @flow
import prep from './internal/unmutable';
import get from './get';
import valueArray from './valueArray';
import pipe from './util/pipe';

export default prep({
    name: 'last',
    immutable: 'last',
    array: () => get(-1),
    all: () => pipe(
        valueArray(),
        get(-1)
    )
});
