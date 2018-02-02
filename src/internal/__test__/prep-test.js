// @flow
import prep from '../prep';
import test from 'ava';
import {List, Map, Record} from 'immutable';

let MyRecord = Record({c:"c"});

test(`prep should handle records`, (tt: *) => {
    let immutable = "recordTest";
    let record = (a,b) => (item) => `${a}${b}${item.c}-record`;
    let keyed = (a,b) => (item) => `${a}${b}${item.c}-keyed`;
    let all = (a,b) => (item) => `${a}${b}${item.c}-all`;

    let useRecord = prep({immutable, record, keyed, all});
    let useKeyed = prep({immutable, keyed, all});
    let useAll = prep({immutable, all});
    let useNone = prep({immutable});

    tt.is("abc-record", useRecord("a","b")(new MyRecord()));
    tt.is("abc-keyed", useKeyed("a","b")(new MyRecord()));
    tt.is("abc-all", useAll("a","b")(new MyRecord()));
    tt.is(tt.throws(() => useNone("a","b")(new MyRecord()), Error).message, `Evaluation of recordTest() failed: method doesn't exist`);
});

test(`prep should handle Lists`, (tt: *) => {
    let myList = List([1,2,3]);
    let all = (key) => (item) => `${key}-${item.get(0)}`;

    let useImmutable = prep({immutable: "get", all});
    let useAll = prep({all});
    let useMissing = prep({immutable: "noooooo"});
    let useNone = prep({});

    tt.is(2, useImmutable(1)(myList));
    tt.is("1-1", useAll(1)(myList));
    tt.is(tt.throws(() => useMissing(1)(myList), Error).message, `Evaluation of noooooo() failed: method doesn't exist`);
    tt.is(tt.throws(() => useNone(1)(myList), Error).message, `Evaluation of function failed: method doesn't exist`);
});

test(`prep should handle Maps`, (tt: *) => {
    let myMap = Map({a:1,b:2,c:3});
    let all = (key) => (item) => `${key}-${item.get('a')}`;

    let useImmutable = prep({immutable: "get", all});
    let useAll = prep({all});
    let useNone = prep({immutable: "noooooo"});

    tt.is(1, useImmutable('a')(myMap));
    tt.is("a-1", useAll('a')(myMap));
    tt.is(tt.throws(() => useNone('a')(myMap), Error).message, `Evaluation of noooooo() failed: method doesn't exist`);
});

test(`prep should handle arrays`, (tt: *) => {
    let myArray = [1,2,3];
    let array = (key) => (item) => `${key}-${item[0]}-array`;
    let all = (key) => (item) => `${key}-${item[0]}-all`;

    let useArray = prep({immutable: "get", array, all});
    let useAll = prep({immutable: "get", all});
    let useNone = prep({immutable: "noooooo"});

    tt.is("1-1-array", useArray(1)(myArray));
    tt.is("1-1-all", useAll(1)(myArray));
    tt.is(tt.throws(() => useNone(1)(myArray), Error).message, `Evaluation of noooooo() failed: method doesn't exist`);
});

test(`prep should handle Objects`, (tt: *) => {
    let myObject = {a:1,b:2,c:3};
    let object = (key) => (item) => `${key}-${item.a}-object`;
    let keyed = (key) => (item) => `${key}-${item.a}-keyed`;
    let all = (key) => (item) => `${key}-${item.a}-all`;

    let useObject = prep({immutable: "get", object, keyed, all});
    let useKeyed = prep({immutable: "get", keyed, all});
    let useAll = prep({immutable: "get", all});
    let useNone = prep({immutable: "noooooo"});

    tt.is("a-1-object", useObject('a')(myObject));
    tt.is("a-1-keyed", useKeyed('a')(myObject));
    tt.is("a-1-all", useAll('a')(myObject));
    tt.is(tt.throws(() => useNone('a')(myObject), Error).message, `Evaluation of noooooo() failed: method doesn't exist`);
});

test(`prep should not handle strings as values`, (tt: *) => {
    let useNone = prep({});
    tt.is(tt.throws(() => useNone()("IMNOTACOLLECTION"), Error).message, `Evaluation of function failed: Value is invalid IMNOTACOLLECTION`);
});

