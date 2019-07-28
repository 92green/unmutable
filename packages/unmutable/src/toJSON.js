// @flow
import prep from './internal/unmutable';
import toArray from './toArray';
import toObject from './toObject';
import isIndexed from './util/isIndexed';

export default prep({
    n: 'toJSON',
    i: 'toJSON',
    _: () => (value) => isIndexed(value) ? toArray()(value) : toObject()(value)
});
