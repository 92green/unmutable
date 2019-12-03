// @flow
import prep from './internal/unmutable';
import map from './map';
import pipe from './pipe';
import toArray from './toArray';

export default prep({
    name: 'toEntries',
    all: () => pipe(
        map((value, key) => [key, value]),
        toArray()
    )
});
