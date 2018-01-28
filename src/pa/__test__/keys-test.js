// @flow
import keys from '../keys';
import test from 'ava';
import {fromJS} from 'immutable';

test(`keys() on object should work`, (tt: *) => {
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

    tt.deepEqual(
        objectKeys,
        immutableKeys
    );
});

test(`keys() on map should work`, (tt: *) => {
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

    tt.deepEqual(
        mapKeys,
        immutableKeys
    );
});

test(`keys() on array should work`, (tt: *) => {
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

    tt.deepEqual(
        arrayKeys,
        immutableKeys
    );
});

test(`keys() on list should work`, (tt: *) => {
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

    tt.deepEqual(
        listKeys,
        immutableKeys
    );
});
