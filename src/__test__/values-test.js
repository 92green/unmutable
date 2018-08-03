// @flow
import values from '../values';
import {fromJS} from 'immutable';
import {Record} from 'immutable';

test(`values() on object should work`, () => {
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

    expect(objectValues).toEqual(immutableValues);
});

test(`values() on map should work`, () => {
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

    expect(mapValues).toEqual(immutableValues);
});

test(`values() on array should work`, () => {
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

    expect(arrayValues).toEqual(immutableValues);
});

test(`values() on list should work`, () => {
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

    expect(listValues).toEqual(immutableValues);
});

test(`values() on record should work`, () => {
    const TestRecord = Record({foo: 'bar'});
    expect([...values()(new TestRecord({}))]).toEqual(['bar']);
});
