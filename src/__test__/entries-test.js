// @flow
import entries from '../entries';
import test from 'ava';
import {fromJS} from 'immutable';
import {Record} from 'immutable';

test(`entries() on object should work`, (t: *) => {
    let objectIterator = entries()({a:1, b:2, c:3});
    let immutableIterator = fromJS({a:1, b:2, c:3}).entries();

    let objectEntries = [];
    for(let a of objectIterator) {
        objectEntries.push(a);
    }

    let immutableEntries = [];
    for(let a of immutableIterator) {
        immutableEntries.push(a);
    }

    t.deepEqual(
        objectEntries,
        immutableEntries
    );
});

test(`entries() on map should work`, (t: *) => {
    let mapIterator = entries()(fromJS({a:1, b:2, c:3}));
    let immutableIterator = fromJS({a:1, b:2, c:3}).entries();

    let mapEntries = [];
    for(let a of mapIterator) {
        mapEntries.push(a);
    }

    let immutableEntries = [];
    for(let a of immutableIterator) {
        immutableEntries.push(a);
    }

    t.deepEqual(
        mapEntries,
        immutableEntries
    );
});

test(`entries() on array should work`, (t: *) => {
    let arrayIterator = entries()([1,2,3]);
    let immutableIterator = fromJS([1,2,3]).entries();

    let arrayEntries = [];
    for(let a of arrayIterator) {
        arrayEntries.push(a);
    }

    let immutableEntries = [];
    for(let a of immutableIterator) {
        immutableEntries.push(a);
    }

    t.deepEqual(
        arrayEntries,
        immutableEntries
    );
});

test(`entries() on list should work`, (t: *) => {
    let listIterator = entries()(fromJS([1,2,3]));
    let immutableIterator = fromJS([1,2,3]).entries();

    let listEntries = [];
    for(let a of listIterator) {
        listEntries.push(a);
    }

    let immutableEntries = [];
    for(let a of immutableIterator) {
        immutableEntries.push(a);
    }

    t.deepEqual(
        listEntries,
        immutableEntries
    );
});

test(`entries() on record should work`, (t: *) => {
    const TestRecord = Record({foo: 'bar'});
    t.deepEqual([...entries()(new TestRecord({}))], [['foo','bar']]);
});
