// @flow
import isPlainObject from 'is-plain-object';
import {isCollection} from '../internal/predicates';

export default (thing: *): boolean => isCollection(thing) || Array.isArray(thing) || isPlainObject(thing);
