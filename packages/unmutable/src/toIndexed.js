// @flow
import prep from './internal/unmutable';
import toArray from './toArray';

export default prep({
    n: 'toIndexed',
    i: 'toList',
    _: toArray
});
