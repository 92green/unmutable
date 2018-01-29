// @flow
import isPlainObject from 'is-plain-object';
import {isKeyed} from '../internal/predicates';

export default (thing: *): boolean => isKeyed(thing) || isPlainObject(thing);
