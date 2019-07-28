// @flow
import prep from './internal/unmutable';
import equals from './equals';
import size from './size';
import takeLast from './takeLast';
import pipe from './util/pipe';

export default prep({
    n: 'endsWith',
    _: (other: Array<any>) => pipe(
        takeLast(size()(other)),
        equals(other)
    )
});
