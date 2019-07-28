// @flow
import prep from '../unmutable';
import {List, Map, Record} from 'immutable';
import UnmutableCompatible from './UnmutableCompatible-testutil';
import pick from '../../pick';
let MyRecord = Record({c:"c"});

test(`unmutable prep should handle records`, () => {
    let i = "recordTest";
    let r = (a,b) => (item) => `${a}${b}${item.c}-record`;
    let _ = (a,b) => (item) => `${a}${b}${item.c}-all`;

    let useRecordMethod = prep({n: "recordTest", r: "get"});
    let useRecord = prep({n: "recordTest", i, r, _});
    //let useImmutable = prep({i, all});
    let useNone = prep({n: "recordTest", i});

    expect("c").toBe(useRecordMethod("c")(new MyRecord()));
    expect("abc-record").toBe(useRecord("a","b")(new MyRecord()));
    //t.is("abc-all", useImmutable("a","b")(new MyRecord()));
    expect(() => useNone("a","b")(new MyRecord())).toThrowError(`recordTest() cannot be called with a value of Record { c: "c" }`);
});

test(`unmutable prep should handle Lists`, () => {
    let myList = List([1,2,3]);
    let _ = (key) => (item) => `${key}-${item.get(0)}`;

    let useImmutable = prep({n: "get", i: "get", _});
    let useAll = prep({n: "get", _});
    let useMissing = prep({n: "noooooo", i: "noooooo"});
    let useNone = prep({n: "get"});

    expect(2).toBe(useImmutable(1)(myList));
    expect("1-1").toBe(useAll(1)(myList));
    expect(() => useMissing(1)(myList)).toThrowError(`noooooo() cannot be called with a value of List [ 1, 2, 3 ]`);
    expect(() => useNone(1)(myList)).toThrowError(`get() cannot be called with a value of List [ 1, 2, 3 ]`);
});

test(`unmutable prep should handle Maps`, () => {
    let myMap = Map({a:1,b:2,c:3});
    let _ = (key) => (item) => `${key}-${item.get('a')}`;

    let useImmutable = prep({n: "get", i: "get", _});
    let useAll = prep({n: "get", _});
    let useNone = prep({n: "noooooo", i: "noooooo"});

    expect(1).toBe(useImmutable('a')(myMap));
    expect("a-1").toBe(useAll('a')(myMap));
    expect(() => useNone('a')(myMap)).toThrowError(`noooooo() cannot be called with a value of Map { "a": 1, "b": 2, "c": 3 }`);
});

test(`unmutable prep should handle arrays`, () => {
    let myArray = [1,2,3];
    let a = (key) => (item) => `${key}-${item[0]}-array`;
    let _ = (key) => (item) => `${key}-${item[0]}-all`;

    let useArray = prep({n: "get", i: "get", a, _});
    let useAll = prep({n: "get", i: "get", _});
    let useNone = prep({n: "noooooo", i: "noooooo"});

    expect("1-1-array").toBe(useArray(1)(myArray));
    expect("1-1-all").toBe(useAll(1)(myArray));
    expect(() => useNone(1)(myArray)).toThrowError(`noooooo() cannot be called with a value of 1,2,3`);
});

test(`unmutable prep should handle Objects`, () => {
    let myObject = {a:1,b:2,c:3};
    let o = (key) => (item) => `${key}-${item.a}-object`;
    let _ = (key) => (item) => `${key}-${item.a}-all`;

    let useObject = prep({n: "get", i: "get", o, _});
    let useKeyed = prep({n: "get", i: "get", _});
    let useAll = prep({n: "get", i: "get", _});
    let useNone = prep({n: "noooooo", i: "noooooo"});

    expect("a-1-object").toBe(useObject('a')(myObject));
    expect("a-1-all").toBe(useAll('a')(myObject));
    expect(() => useNone('a')(myObject)).toThrowError(`noooooo() cannot be called with a value of [object Object]`);
});

test(`unmutable prep should handle class instances`, () => {
    class A {
        a = 1;
        b = 2;
        c = 3;
    }
    let myClassInstance = new A();
    let o = (key) => (item) => `${key}-${item.a}-object`;
    let _ = (key) => (item) => `${key}-${item.a}-all`;

    let useObject = prep({n: "get", i: "get", o, _});
    let useKeyed = prep({n: "get", i: "get", _});
    let useAll = prep({n: "get", i: "get", _});
    let useNone = prep({n: "noooooo", i: "noooooo"});

    expect("a-1-object").toBe(useObject('a')(myClassInstance));
    expect("a-1-all").toBe(useAll('a')(myClassInstance));
    expect(() => useNone('a')(myClassInstance)).toThrowError(`noooooo() cannot be called with a value of [object Object]`);
});

test(`unmutable prep should handle functions`, () => {
    let myFunction = () => {};
    myFunction.a = 1;
    myFunction.b = 2;
    myFunction.c = 3;

    let o = (key) => (item) => `${key}-${item.a}-object`;
    let _ = (key) => (item) => `${key}-${item.a}-all`;

    let useObject = prep({n: "get", i: "get", o, _});
    let useKeyed = prep({n: "get", i: "get", _});
    let useAll = prep({n: "get", i: "get", _});
    let useNone = prep({n: "noooooo", i: "noooooo"});

    expect("a-1-object").toBe(useObject('a')(myFunction));
    expect("a-1-all").toBe(useAll('a')(myFunction));
    expect(() => useNone('a')(myFunction)).toThrowError(`noooooo() cannot be called with a value of function myFunction() {}`);
});

test(`unmutable prep should handle unmutable compatible data types`, () => {
    let myUnmutableCompatible = new UnmutableCompatible({a:1, b:2, c:3});
    let _ = (key) => (item) => `all`;

    let useUnmutable = prep({n: "get", _});
    let useAll = prep({n: "getThatDoesntExistOnUmutableCompatibleThing", _});
    let useNone = prep({n: "noooooo"});

    expect(useUnmutable('a')(myUnmutableCompatible)).toBe(1); // use unmutable compatible method
    expect(useAll('a')(myUnmutableCompatible)).toBe("all"); // fallback to all if unmutable compatible method doesnt exist
    expect(() => useNone('a')(myUnmutableCompatible)).toThrowError(`noooooo() cannot be called with a value of [object Object]`); // error if method doesnt exist and all doesnt exist
});

test(`unmutable prep should not handle strings as values`, () => {
    let useNone = prep({n: "find", a: () => {}});
    expect(() => useNone()("IMNOTACOLLECTION")).toThrowError(`find() cannot be called with a value of IMNOTACOLLECTION`);
});

test(`unmutable prep should throw bad value errors from the top export of the function being called, not from an internal one`, () => {
    expect(() => {
        pick(['a'])(undefined); // deliberately pass undefined into pick's value, so something deep inside pick will break
    }).toThrowError(`Unmutable pick() cannot be called with a value of undefined`);
});

test(`unmutable prep should throw other errors from the top export of the function being called, not from an internal one`, () => {
    let errorToThrow;
    try {
        let keys = undefined;
        // $FlowFixMe - deliberate misuse of types
        keys.includes(0);
    } catch(e) {
        errorToThrow = e.message;
    }

    expect(() => {
        pick(undefined)([0,1,2]); // deliberately pass undefined into pick key array, so something deep inside pick will break
    }).toThrowError(errorToThrow);
});

