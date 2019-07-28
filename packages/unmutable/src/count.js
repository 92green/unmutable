// @flow
import prep from './internal/unmutable';
import keyArray from './keyArray';
import pipe from './util/pipe';

export default prep({
    n: 'count',
    i: 'count',
    a: () => (value: Array<*>): number => value.length,
    _: () => pipe(
        keyArray(),
        keys => keys.length
    )
});
