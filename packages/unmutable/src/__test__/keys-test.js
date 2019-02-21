// @flow
import keys from '../keys';
import {fromJS} from 'immutable';
import {Record} from 'immutable';


test(`keys() on object should work`, () => {
    let objectIterator = keys()({a:1, b:2, c:3});
    let immutableIterator = fromJS({a:1, b:2, c:3}).keys();

    let objectKeys = [];
    for(let a of objectIterator) {
        objectKeys.push(a);
    }

    let immutableKeys = [];
    for(let a of immutableIterator) {
        immutableKeys.push(a);
    }

    expect(objectKeys).toEqual(immutableKeys);
});

test(`keys() on map should work`, () => {
    let mapIterator = keys()(fromJS({a:1, b:2, c:3}));
    let immutableIterator = fromJS({a:1, b:2, c:3}).keys();

    let mapKeys = [];
    for(let a of mapIterator) {
        mapKeys.push(a);
    }

    let immutableKeys = [];
    for(let a of immutableIterator) {
        immutableKeys.push(a);
    }

    expect(mapKeys).toEqual(immutableKeys);
});

test(`keys() on array should work`, () => {
    let arrayIterator = keys()([1,2,3]);
    let immutableIterator = fromJS([1,2,3]).keys();

    let arrayKeys = [];
    for(let a of arrayIterator) {
        arrayKeys.push(a);
    }

    let immutableKeys = [];
    for(let a of immutableIterator) {
        immutableKeys.push(a);
    }

    expect(arrayKeys).toEqual(immutableKeys);
});

test(`keys() on list should work`, () => {
    let listIterator = keys()(fromJS([1,2,3]));
    let immutableIterator = fromJS([1,2,3]).keys();

    let listKeys = [];
    for(let a of listIterator) {
        listKeys.push(a);
    }

    let immutableKeys = [];
    for(let a of immutableIterator) {
        immutableKeys.push(a);
    }

    expect(listKeys).toEqual(immutableKeys);
});

test(`keys() on record should work`, () => {
    const TestRecord = Record({foo: 'bar'});
    expect([...keys()(new TestRecord({}))]).toEqual(['foo']);
});
