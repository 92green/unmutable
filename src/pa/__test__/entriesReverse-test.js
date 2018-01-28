// @flow
import entriesReverse from '../entriesReverse';
import test from 'ava';
import {fromJS} from 'immutable';

test(`entriesReverse() on object should work`, (tt: *) => {
    let objectIterator = entriesReverse()({a:1, b:2, c:3});

    let objectEntries = [];
    for(let a of objectIterator) {
        objectEntries.push(a);
    }

    tt.deepEqual(
        [['c',3],['b',2],['a',1]],
        objectEntries
    );
});

test(`entriesReverse() on map should work`, (tt: *) => {
    let mapIterator = entriesReverse()(fromJS({a:1, b:2, c:3}));

    let mapEntries = [];
    for(let a of mapIterator) {
        mapEntries.push(a);
    }

    tt.deepEqual(
        [['c',3],['b',2],['a',1]],
        mapEntries
    );
});

test(`entriesReverse() on array should work`, (tt: *) => {
    let arrayIterator = entriesReverse()([1,2,3]);

    let arrayEntries = [];
    for(let a of arrayIterator) {
        arrayEntries.push(a);
    }

    tt.deepEqual(
        [[2,3],[1,2],[0,1]],
        arrayEntries
    );
});

test(`entriesReverse() on list should work`, (tt: *) => {
    let listIterator = entriesReverse()(fromJS([1,2,3]));

    let listEntries = [];
    for(let a of listIterator) {
        listEntries.push(a);
    }

    tt.deepEqual(
        [[2,3],[1,2],[0,1]],
        listEntries
    );
});
