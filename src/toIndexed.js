// @flow
import prep from './internal/prep';
import toArray from './toArray';

export default prep({
    name: 'toIndexed',
    immutable: 'toList',
    all: toArray
});
