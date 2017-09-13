// @flow

/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

export function isImmutable(maybeImmutable: *): boolean {
    return (isCollection(maybeImmutable) || isRecord(maybeImmutable)) &&
    !maybeImmutable.__ownerID;
}

export function isCollection(maybeCollection: *): boolean {
    return !!(maybeCollection && maybeCollection[IS_ITERABLE_SENTINEL]);
}

export function isKeyed(maybeKeyed: *): boolean {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
}

export function isIndexed(maybeIndexed: *): boolean {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
}

export function isAssociative(maybeAssociative: *): boolean {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}

export function isOrdered(maybeOrdered: *): boolean {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
}

export function isRecord(maybeRecord: *): boolean {
    return !!(maybeRecord && maybeRecord[IS_RECORD_SENTINEL]);
}

export function isValueObject(maybeValue: *): boolean {
    return !!(maybeValue &&
    typeof maybeValue.equals === 'function' &&
    typeof maybeValue.hashCode === 'function');
}

export function isMap(maybeMap: *): boolean {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
}

export function isList(maybeList: *): boolean {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
}

export const IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
export const IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
export const IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
export const IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
export const IS_RECORD_SENTINEL = '@@__IMMUTABLE_RECORD__@@';
export const IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
export const IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
