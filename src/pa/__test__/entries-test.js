// @flow
import entries from '../entries';
import test from 'ava';
import {fromJS} from 'immutable';
import {Record} from 'immutable';

test(`entries() on object should work`, (tt: *) => {
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

    tt.deepEqual(
        objectEntries,
        immutableEntries
    );
});

test(`entries() on map should work`, (tt: *) => {
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

    tt.deepEqual(
        mapEntries,
        immutableEntries
    );
});

test(`entries() on array should work`, (tt: *) => {
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

    tt.deepEqual(
        arrayEntries,
        immutableEntries
    );
});

test(`entries() on list should work`, (tt: *) => {
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

    tt.deepEqual(
        listEntries,
        immutableEntries
    );
});

test(`entries() on record should work`, (tt: *) => {
    const TestRecord = Record({foo: 'bar'});
    tt.deepEqual([...entries()(new TestRecord({}))], [['foo','bar']]);
});
