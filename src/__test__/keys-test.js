// @flow
import keys from '../keys';
import test from 'ava';
import {fromJS} from 'immutable';
import {Record} from 'immutable';


test(`keys() on object should work`, (t: *) => {
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

    t.deepEqual(
        objectKeys,
        immutableKeys
    );
});

test(`keys() on map should work`, (t: *) => {
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

    t.deepEqual(
        mapKeys,
        immutableKeys
    );
});

test(`keys() on array should work`, (t: *) => {
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

    t.deepEqual(
        arrayKeys,
        immutableKeys
    );
});

test(`keys() on list should work`, (t: *) => {
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

    t.deepEqual(
        listKeys,
        immutableKeys
    );
});

test(`keys() on record should work`, (t: *) => {
    const TestRecord = Record({foo: 'bar'});
    t.deepEqual([...keys()(new TestRecord({}))], ['foo']);
});
