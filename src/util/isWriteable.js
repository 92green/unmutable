// @flow
import isImmutable from './isImmutable';
import isPlainObject from './isPlainObject';

export default (thing: *): boolean => isImmutable(thing) || Array.isArray(thing) || isPlainObject(thing);
