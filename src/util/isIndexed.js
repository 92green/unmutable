// @flow
import {isIndexed} from '../internal/predicates';

export default (thing: *): boolean => isIndexed(thing) || Array.isArray(thing);
