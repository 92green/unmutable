// @flow
import isObject from './isObject';
import {isImmutable, isKeyed} from '../internal/immutableJsPredicates';

export default (thing: *): boolean => isImmutable(thing)
    ? isKeyed(thing)
    : !Array.isArray(thing) && isObject(thing);
