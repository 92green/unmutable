// @flow
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function isImmutable(maybeImmutable: *): boolean {
    return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}

export function isCollection(ii: *): boolean {
    return !ii
        ? false
        : !!(ii[IS_ITERABLE_SENTINEL] || ii[IS_MAP_SENTINEL]);
}

export function isKeyed(ii: *): boolean {
    return !ii
        ? false
        : !!(ii[IS_KEYED_SENTINEL] || ii[IS_MAP_SENTINEL]);
}

export function isIndexed(ii: *): boolean {
    return !ii
        ? false
        : !!(ii[IS_INDEXED_SENTINEL] || ii[IS_LIST_SENTINEL]);
}

export function isAssociative(ii: *): boolean {
    return isKeyed(ii) || isIndexed(ii);
}

export function isOrdered(ii: *): boolean {
    return !ii
        ? false
        : !!(ii[IS_ORDERED_SENTINEL]);
}

export function isRecord(ii: *): boolean {
    return !ii
        ? false
        : !!(ii[IS_RECORD_SENTINEL] || isVersion3Record(ii));
}

export function isVersion3Record(ii: *): boolean {
    return !!(typeof ii === "object" && ii.__proto__.hasOwnProperty("_defaultValues"));
}

export function isValueObject(ii: *): boolean {
    return !ii
        ? false
        : typeof ii.equals === 'function'
            && typeof ii.hashCode === 'function';
}

// verion 4
export const IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
export const IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
export const IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
export const IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
export const IS_RECORD_SENTINEL = '@@__IMMUTABLE_RECORD__@@';

// version 3
export const IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
export const IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
