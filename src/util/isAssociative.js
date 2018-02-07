// @flow
import isPlainObject from 'is-plain-object';
import {isAssociative} from '../internal/predicates';

export default (thing: *): boolean => isAssociative(thing) || Array.isArray(thing) || isPlainObject(thing);
