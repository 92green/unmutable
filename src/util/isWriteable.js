// @flow
import isImmutable from './isImmutable';
import isPlainObject from './isPlainObject';
import {isUnmutableCompatible} from '../internal/unmutablePredicates';

export default (thing: *): boolean => isImmutable(thing) || Array.isArray(thing) || isUnmutableCompatible(thing) || isPlainObject(thing);
