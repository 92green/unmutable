// @flow

/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

export function isMap(maybeMap: *): boolean {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
}

export function isList(maybeList: *): boolean {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
}

export const IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
export const IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
