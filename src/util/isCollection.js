// @flow
import {isCollection, isImmutable} from '../internal/immutableJsPredicates';
import isObject from './isObject';

export default (thing: *): boolean => isImmutable(thing)
    ? isCollection(thing)
    : isObject(thing);
