// @flow
import {isIndexed} from '../internal/immutableJsPredicates';

export default (thing: *): boolean => isIndexed(thing) || Array.isArray(thing);
