// @flow
import values from '../values';
import test from 'ava';
import {fromJS} from 'immutable';
import {Record} from 'immutable';

test(`values() on object should work`, (t: *) => {
    let objectIterator = values()({a:1, b:2, c:3});
    let immutableIterator = fromJS({a:1, b:2, c:3}).values();

    let objectValues = [];
    for(let a of objectIterator) {
        objectValues.push(a);
    }

    let immutableValues = [];
    for(let a of immutableIterator) {
        immutableValues.push(a);
    }

    t.deepEqual(
        objectValues,
        immutableValues
    );
});

test(`values() on map should work`, (t: *) => {
    let mapIterator = values()(fromJS({a:1, b:2, c:3}));
    let immutableIterator = fromJS({a:1, b:2, c:3}).values();

    let mapValues = [];
    for(let a of mapIterator) {
        mapValues.push(a);
    }

    let immutableValues = [];
    for(let a of immutableIterator) {
        immutableValues.push(a);
    }

    t.deepEqual(
        mapValues,
        immutableValues
    );
});

test(`values() on array should work`, (t: *) => {
    let arrayIterator = values()([1,2,3]);
    let immutableIterator = fromJS([1,2,3]).values();

    let arrayValues = [];
    for(let a of arrayIterator) {
        arrayValues.push(a);
    }

    let immutableValues = [];
    for(let a of immutableIterator) {
        immutableValues.push(a);
    }

    t.deepEqual(
        arrayValues,
        immutableValues
    );
});

test(`values() on list should work`, (t: *) => {
    let listIterator = values()(fromJS([1,2,3]));
    let immutableIterator = fromJS([1,2,3]).values();

    let listValues = [];
    for(let a of listIterator) {
        listValues.push(a);
    }

    let immutableValues = [];
    for(let a of immutableIterator) {
        immutableValues.push(a);
    }

    t.deepEqual(
        listValues,
        immutableValues
    );
});

test(`values() on record should work`, (t: *) => {
    const TestRecord = Record({foo: 'bar'});
    t.deepEqual([...values()(new TestRecord({}))], ['bar']);
});
