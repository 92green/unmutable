// @flow
import test from 'ava';
import {Wrap} from './index';
import {
    IndexedTests,
    KeyedTests,
    WrapTests
} from 'unmutable-core';

WrapTests(test, Wrap);

var keyedTests: Array<string> = [
    //asImmutable
    //asMutable
    "butLast",
    "clear",
    "concat",
    "count",
    //countBy
    "delete",
    "deleteIn",
    //entries
    //entrySeq
    //equals
    "every",
    "filter",
    "filterNot",
    //find
    //findEntry
    //findKey
    //findLast
    //findLastEntry
    //findLastKey
    "first",
    //flatMap,
    //flatten
    //flip
    //forEach
    "get",
    "getIn",
    //groupBy
    "has",
    "hasIn",
    //hashCode
    "hasIn",
    "includes",
    //isEmpty
    //isSubset
    //isSuperset
    //join
    //keyOf
    //keys
    //keySeq
    "last",
    //lastKeyOf
    "map",
    "mapEntries",
    "mapKeys",
    //max
    //maxBy
    "merge",
    //mergeDeep
    //mergeDeepIn
    //mergeDeepWith
    //mergeIn
    "mergeWith",
    //min
    //minBy
    //reduce
    //reduceRight
    "rest",
    "reverse",
    "set",
    "setIn",
    "skip",
    "skipLast",
    "skipUntil",
    "skipWhile",
    "slice",
    "some",
    "sort",
    "sortBy",
    //take
    //takeLast
    //takeUntil
    //takeWhile
    //toArray
    //toIndexedSeq
    //toJS
    //toJSON
    //toKeyedSeq
    //toList
    //toMap
    //toObject
    //toOrderedMap
    //toOrderedSet
    //toSeq
    //toSet
    //toSetSeq
    //toStack
    "update",
    "updateIn"
    //values
    //valueSeq
    //withMutations
];

KeyedTests(test, Wrap, keyedTests);

var indexedTests: Array<string> = [
    //asImmutable
    //asMutable
    "butLast",
    "clear",
    "concat",
    "count",
    //countBy
    "delete",
    "deleteIn",
    //entries
    //entrySeq
    //equals
    "every",
    "filter",
    "filterNot",
    //find
    //findEntry
    //findIndex
    //findKey
    //findLast
    //findLastEntry
    //findLastIndex
    //findLastKey
    "first",
    //flatMap,
    //flatten
    //forEach
    //fromEntrySeq
    "get",
    "getIn",
    //groupBy
    "has",
    //hashCode
    "hasIn",
    "includes",
    //indexOf
    "insert",
    "interleave",
    "interpose",
    "isEmpty",
    //isSubset
    //isSuperset
    //join
    //keyOf
    //keys
    //keySeq
    "last",
    //lastIndexOf
    //lastKeyOf
    "map",
    //max
    //maxBy
    "merge",
    //mergeDeep
    //mergeDeepIn
    //mergeDeepWith
    //mergeIn
    "mergeWith",
    //min
    //minBy
    "pop",
    "push",
    //reduce
    //reduceRight
    "rest",
    "reverse",
    "set",
    "setIn",
    //setSize
    "shift",
    "skip",
    "skipLast",
    "skipUntil",
    "skipWhile",
    "slice",
    "some",
    "sort",
    "sortBy",
    //splice
    //take
    //takeLast
    //takeUntil
    //takeWhile
    //toArray
    //toIndexedSeq
    //toJS
    //toJSON
    //toKeyedSeq
    //toList
    //toMap
    //toObject
    //toOrderedMap
    //toOrderedSet
    //toSeq
    //toSet
    //toSetSeq
    //toStack
    "unshift",
    "update",
    "updateIn"
    //values
    //valueSeq
    //withMutations
    //zip
    //zipWith
];

IndexedTests(test, Wrap, indexedTests);
