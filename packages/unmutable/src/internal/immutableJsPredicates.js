// @flow
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const isImmutable = (maybeImmutable: any): boolean => {
    return isCollection(maybeImmutable) || isRecord(maybeImmutable);
};

export const _isImmutableNoRecordChecks = (ii: any): boolean => {
    return !ii
        ? false
        : !!ii[IS_ITERABLE_SENTINEL];
};

export const isCollection = (ii: any): boolean => {
    return !ii
        ? false
        : !!((ii[IS_ITERABLE_SENTINEL] && !isVersion3Record(ii)));
};

export const isKeyed = (ii: any): boolean => {
    return !ii
        ? false
        : !!((ii[IS_KEYED_SENTINEL] && !isVersion3Record(ii)));
};

export const isIndexed = (ii: any): boolean => {
    return !ii
        ? false
        : !!(ii[IS_INDEXED_SENTINEL]);
};

export const isAssociative = (ii: any): boolean => {
    return isKeyed(ii) || isIndexed(ii);
};

export const isOrdered = (ii: any): boolean => {
    return !ii
        ? false
        : !!(ii[IS_ORDERED_SENTINEL]);
};
export const isRecord = (ii: any): boolean => {
    return !ii
        ? false
        : !!(ii[IS_RECORD_SENTINEL] || isVersion3Record(ii));
};

export const isVersion3Record = (ii: any): boolean => {
    return !!(ii._defaultValues);
};

export const isValueObject = (ii: any): boolean => {
    return !ii
        ? false
        : typeof ii.equals === 'function'
            && typeof ii.hashCode === 'function';
};

export const IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
export const IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
export const IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
export const IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
export const IS_RECORD_SENTINEL = '@@__IMMUTABLE_RECORD__@@';
