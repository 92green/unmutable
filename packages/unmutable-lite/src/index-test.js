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
