// @flow
import isPlainObject from 'is-plain-object';
import {isCollection, isValueObject} from '../internal/predicates';

export default (thing: *): boolean => isCollection(thing) || isValueObject(thing) || Array.isArray(thing) || isPlainObject(thing);
