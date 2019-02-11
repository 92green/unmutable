// @flow
import prep from './internal/unmutable';
import equals from './equals';
import size from './size';
import take from './take';
import pipe from './util/pipe';

export default prep({
    name: "startsWith",
    all: (other: Array<any>) => pipe(
        take(size()(other)),
        equals(other)
    )
});
