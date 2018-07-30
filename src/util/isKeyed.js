// @flow
import isObject from './isObject';
import {isImmutable, isKeyed} from '../internal/predicates';

export default (thing: *): boolean => isImmutable(thing)
    ? isKeyed(thing)
    : !Array.isArray(thing) && isObject(thing);
