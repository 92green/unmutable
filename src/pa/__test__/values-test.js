// @flow
import values from '../values';
import test from 'ava';
import {fromJS} from 'immutable';
import {Record} from 'immutable';

test(`values() on object should work`, (tt: *) => {
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

    tt.deepEqual(
        objectValues,
        immutableValues
    );
});

test(`values() on map should work`, (tt: *) => {
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

    tt.deepEqual(
        mapValues,
        immutableValues
    );
});

test(`values() on array should work`, (tt: *) => {
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

    tt.deepEqual(
        arrayValues,
        immutableValues
    );
});

test(`values() on list should work`, (tt: *) => {
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

    tt.deepEqual(
        listValues,
        immutableValues
    );
});

test(`values() on record should work`, (tt: *) => {
    const TestRecord = Record({foo: 'bar'});
    tt.deepEqual([...values()(new TestRecord({}))], ['bar']);
});
