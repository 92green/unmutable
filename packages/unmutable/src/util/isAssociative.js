// @flow
import {isAssociative, isImmutable} from '../internal/immutableJsPredicates';
import isObject from './isObject';

export default (thing: *): boolean => isImmutable(thing)
    ? isAssociative(thing)
    : isObject(thing);
