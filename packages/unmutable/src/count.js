// @flow
import prep from './internal/unmutable';
import keyArray from './keyArray';
import pipe from './util/pipe';

export default prep({
    name: 'count',
    immutable: 'count',
    array: () => (value: Array<*>): number => value.length,
    all: () => pipe(
        keyArray(),
        keys => keys.length
    ),
    ap: true
});
