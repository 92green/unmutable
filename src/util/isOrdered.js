// @flow
import {isOrdered} from '../internal/predicates';

export default (thing: *): boolean => isOrdered(thing) || Array.isArray(thing);
