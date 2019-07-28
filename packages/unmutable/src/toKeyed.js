// @flow
import prep from './internal/unmutable';
import identity from './identity';
import toObject from './toObject';

export default prep({
    n: 'toKeyed',
    i: 'toMap',
    o: identity,
    a: toObject
});
