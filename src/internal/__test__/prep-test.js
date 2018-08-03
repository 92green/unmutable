// @flow
import prep from '../prep';
import test from 'ava';
import {List, Map, Record} from 'immutable';

let MyRecord = Record({c:"c"});

test(`prep should handle records`, (t: *) => {
    let immutable = "recordTest";
    let record = (a,b) => (item) => `${a}${b}${item.c}-record`;
    let all = (a,b) => (item) => `${a}${b}${item.c}-all`;

    let useRecordMethod = prep({name: "recordTest", record: "get"});
    let useRecord = prep({name: "recordTest", immutable, record, all});
    //let useImmutable = prep({immutable, all});
    let useNone = prep({name: "recordTest", immutable});

    t.is("c", useRecordMethod("c")(new MyRecord()));
    t.is("abc-record", useRecord("a","b")(new MyRecord()));
    //t.is("abc-all", useImmutable("a","b")(new MyRecord()));
    t.is(t.throws(() => useNone("a","b")(new MyRecord()), Error).message, `recordTest() cannot be called on Record { c: "c" }`);
});

test(`prep should handle Lists`, (t: *) => {
    let myList = List([1,2,3]);
    let all = (key) => (item) => `${key}-${item.get(0)}`;

    let useImmutable = prep({name: "get", immutable: "get", all});
    let useAll = prep({name: "get", all});
    let useMissing = prep({name: "noooooo", immutable: "noooooo"});
    let useNone = prep({name: "get"});

    t.is(2, useImmutable(1)(myList));
    t.is("1-1", useAll(1)(myList));
    t.is(t.throws(() => useMissing(1)(myList), Error).message, `noooooo() cannot be called on List [ 1, 2, 3 ]`);
    t.is(t.throws(() => useNone(1)(myList), Error).message, `get() cannot be called on List [ 1, 2, 3 ]`);
});

test(`prep should handle Maps`, (t: *) => {
    let myMap = Map({a:1,b:2,c:3});
    let all = (key) => (item) => `${key}-${item.get('a')}`;

    let useImmutable = prep({name: "get", immutable: "get", all});
    let useAll = prep({name: "get", all});
    let useNone = prep({name: "noooooo", immutable: "noooooo"});

    t.is(1, useImmutable('a')(myMap));
    t.is("a-1", useAll('a')(myMap));
    t.is(t.throws(() => useNone('a')(myMap), Error).message, `noooooo() cannot be called on Map { "a": 1, "b": 2, "c": 3 }`);
});

test(`prep should handle arrays`, (t: *) => {
    let myArray = [1,2,3];
    let array = (key) => (item) => `${key}-${item[0]}-array`;
    let all = (key) => (item) => `${key}-${item[0]}-all`;

    let useArray = prep({name: "get", immutable: "get", array, all});
    let useAll = prep({name: "get", immutable: "get", all});
    let useNone = prep({name: "noooooo", immutable: "noooooo"});

    t.is("1-1-array", useArray(1)(myArray));
    t.is("1-1-all", useAll(1)(myArray));
    t.is(t.throws(() => useNone(1)(myArray), Error).message, `noooooo() cannot be called on 1,2,3`);
});

test(`prep should handle Objects`, (t: *) => {
    let myObject = {a:1,b:2,c:3};
    let object = (key) => (item) => `${key}-${item.a}-object`;
    let all = (key) => (item) => `${key}-${item.a}-all`;

    let useObject = prep({name: "get", immutable: "get", object, all});
    let useKeyed = prep({name: "get", immutable: "get", all});
    let useAll = prep({name: "get", immutable: "get", all});
    let useNone = prep({name: "noooooo", immutable: "noooooo"});

    t.is("a-1-object", useObject('a')(myObject));
    t.is("a-1-all", useAll('a')(myObject));
    t.is(t.throws(() => useNone('a')(myObject), Error).message, `noooooo() cannot be called on [object Object]`);
});

test(`prep should handle class instances`, (t: *) => {
    class A {
        a = 1;
        b = 2;
        c = 3;
    }
    let myClassInstance = new A();
    let object = (key) => (item) => `${key}-${item.a}-object`;
    let all = (key) => (item) => `${key}-${item.a}-all`;

    let useObject = prep({name: "get", immutable: "get", object, all});
    let useKeyed = prep({name: "get", immutable: "get", all});
    let useAll = prep({name: "get", immutable: "get", all});
    let useNone = prep({name: "noooooo", immutable: "noooooo"});

    t.is("a-1-object", useObject('a')(myClassInstance));
    t.is("a-1-all", useAll('a')(myClassInstance));
    t.is(t.throws(() => useNone('a')(myClassInstance), Error).message, `noooooo() cannot be called on [object Object]`);
});

test(`prep should handle functions`, (t: *) => {
    let myFunction = () => {};
    myFunction.a = 1;
    myFunction.b = 2;
    myFunction.c = 3;

    let object = (key) => (item) => `${key}-${item.a}-object`;
    let all = (key) => (item) => `${key}-${item.a}-all`;

    let useObject = prep({name: "get", immutable: "get", object, all});
    let useKeyed = prep({name: "get", immutable: "get", all});
    let useAll = prep({name: "get", immutable: "get", all});
    let useNone = prep({name: "noooooo", immutable: "noooooo"});

    t.is("a-1-object", useObject('a')(myFunction));
    t.is("a-1-all", useAll('a')(myFunction));
    t.is(t.throws(() => useNone('a')(myFunction), Error).message, `noooooo() cannot be called on function myFunction() {}`);
});


test(`prep should not handle strings as values`, (t: *) => {
    let useNone = prep({name: "find", array: () => {}});
    t.is(t.throws(() => useNone()("IMNOTACOLLECTION"), Error).message, `find() cannot be called on IMNOTACOLLECTION`);
});
