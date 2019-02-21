// @flow
import prep from './internal/unmutable';
import toArray from './toArray';

export default prep({
    name: 'toIndexed',
    immutable: 'toList',
    all: toArray
});
