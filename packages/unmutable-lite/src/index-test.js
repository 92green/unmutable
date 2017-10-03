// @flow
import test from 'ava';
import {Wrap} from './index';
import IndexedTests from 'unmutable-core/lib/tests/IndexedTests-testUtil';
import KeyedTests from 'unmutable-core/lib/tests/KeyedTests-testUtil';
import WrapTests from 'unmutable-core/lib/tests/WrapTests-testUtil';
import UnwrapTests from 'unmutable-core/lib/tests/UnwrapTests-testUtil';
import IsUnmutableTests from 'unmutable-core/lib/tests/IsUnmutableTests-testUtil';

WrapTests(test, Wrap);
UnwrapTests(test, Wrap);
IsUnmutableTests(test, Wrap);

var keyedTests: Array<string> = [
    "clear",
    "concat",
    "count",
    "delete",
    "deleteIn",
    "get",
    "getIn",
    "has",
    "hasIn",
    "includes",
    "isEmpty",
    "map",
    "reduce",
    "reduceRight",
    "set",
    "setIn",
    "update",
    "updateIn"
];

KeyedTests(test, Wrap, keyedTests);

var indexedTests: Array<string> = [
    "butLast",
    "clear",
    "concat",
    "count",
    "delete",
    "deleteIn",
    "every",
    "first",
    "get",
    "getIn",
    "has",
    "hasIn",
    "includes",
    "isEmpty",
    "map",
    "last",
    "push",
    "pop",
    "reduce",
    "reduceRight",
    "rest",
    "reverse",
    "set",
    "setIn",
    "shift",
    "skip",
    "skipLast",
    "some",
    "take",
    "takeLast",
    "unshift",
    "update",
    "updateIn"
];

IndexedTests(test, Wrap, indexedTests);
