// @flow
import {isOrdered} from '../internal/immutableJsPredicates';

export default (thing: *): boolean => isOrdered(thing) || Array.isArray(thing);
