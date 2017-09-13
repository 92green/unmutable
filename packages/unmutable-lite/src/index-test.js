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
    "clear",
    "concat",
    "count",
    "delete",
    "deleteIn",
    "first",
    "get",
    "getIn",
    "has",
    "hasIn",
    "includes",
    "isEmpty",
    "last",
    "set",
    "setIn",
    "update",
    "updateIn"
];

IndexedTests(test, Wrap, indexedTests);
