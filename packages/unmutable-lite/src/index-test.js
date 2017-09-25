// @flow
import test from 'ava';
import {Wrap} from './index';
import IndexedTests from 'unmutable-core/lib/tests/IndexedTests-testUtil';
import KeyedTests from 'unmutable-core/lib/tests/KeyedTests-testUtil';
import WrapTests from 'unmutable-core/lib/tests/WrapTests-testUtil';

WrapTests(test, Wrap);

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
    "last",
    "push",
    "pop",
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
