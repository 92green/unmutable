// @flow
import test from 'ava';
import {Wrap} from './index';
import IndexedTests from 'unmutable-core/lib/tests/IndexedTests-testUtil';
import KeyedTests from 'unmutable-core/lib/tests/KeyedTests-testUtil';
import WrapTests from 'unmutable-core/lib/tests/WrapTests-testUtil';
import UnwrapTests from 'unmutable-core/lib/tests/UnwrapTests-testUtil';
import IsUnmutableTests from 'unmutable-core/lib/tests/IsUnmutableTests-testUtil';

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

WrapTests(test, Wrap, "unmutableLite");
UnwrapTests(test, Wrap, "unmutableLite");
IsUnmutableTests(test, Wrap, "unmutableLite");
KeyedTests(test, Wrap, keyedTests, "unmutableLite");
IndexedTests(test, Wrap, indexedTests, "unmutableLite");
