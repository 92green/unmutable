// @flow
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const isImmutable = (maybeImmutable: *): boolean => {
    return isCollection(maybeImmutable) || isRecord(maybeImmutable);
};

export const _isImmutableNoRecordChecks = (ii: *): boolean => {
    return !ii
        ? false
        : !!ii[IS_ITERABLE_SENTINEL];
};

export const isCollection = (ii: *): boolean => {
    return !ii
        ? false
        : !!((ii[IS_ITERABLE_SENTINEL] && !isVersion3Record(ii)));
};

export const isKeyed = (ii: *): boolean => {
    return !ii
        ? false
        : !!((ii[IS_KEYED_SENTINEL] && !isVersion3Record(ii)));
};

export const isIndexed = (ii: *): boolean => {
    return !ii
        ? false
        : !!(ii[IS_INDEXED_SENTINEL]);
};

export const isAssociative = (ii: *): boolean => {
    return isKeyed(ii) || isIndexed(ii);
};

export const isOrdered = (ii: *): boolean => {
    return !ii
        ? false
        : !!(ii[IS_ORDERED_SENTINEL]);
};
export const isRecord = (ii: *): boolean => {
    return !ii
        ? false
        : !!(ii[IS_RECORD_SENTINEL] || isVersion3Record(ii));
};

export const isVersion3Record = (ii: *): boolean => {
    return !!(ii._defaultValues);
};

export const isValueObject = (ii: *): boolean => {
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
