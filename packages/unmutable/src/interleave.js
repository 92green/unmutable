// @flow
import prep from './internal/unmutable';
import pipe from './util/pipe';
import zip from './zip';
import flatten from './flatten';

export default prep({
    name: 'interleave',
    immutable: 'interleave',
    array: (...collections: Array<*>) => pipe(
        zip(...collections),
        flatten(true)
    )
});
