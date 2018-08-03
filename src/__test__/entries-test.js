// @flow
import entries from '../entries';
import {fromJS} from 'immutable';
import {Record} from 'immutable';

test(`entries() on object should work`, () => {
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

    expect(objectEntries).toEqual(immutableEntries);
});

test(`entries() on map should work`, () => {
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

    expect(mapEntries).toEqual(immutableEntries);
});

test(`entries() on array should work`, () => {
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

    expect(arrayEntries).toEqual(immutableEntries);
});

test(`entries() on list should work`, () => {
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

    expect(listEntries).toEqual(immutableEntries);
});

test(`entries() on record should work`, () => {
    const TestRecord = Record({foo: 'bar'});
    expect([...entries()(new TestRecord({}))]).toEqual([['foo','bar']]);
});
