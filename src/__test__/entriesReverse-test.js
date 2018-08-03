// @flow
import entriesReverse from '../entriesReverse';
import {fromJS} from 'immutable';

test(`entriesReverse() on object should work`, () => {
    let objectIterator = entriesReverse()({a:1, b:2, c:3});

    let objectEntries = [];
    for(let a of objectIterator) {
        objectEntries.push(a);
    }

    expect([['c',3],['b',2],['a',1]]).toEqual(objectEntries);
});

test(`entriesReverse() on map should work`, () => {
    let mapIterator = entriesReverse()(fromJS({a:1, b:2, c:3}));

    let mapEntries = [];
    for(let a of mapIterator) {
        mapEntries.push(a);
    }

    expect([['c',3],['b',2],['a',1]]).toEqual(mapEntries);
});

test(`entriesReverse() on array should work`, () => {
    let arrayIterator = entriesReverse()([1,2,3]);

    let arrayEntries = [];
    for(let a of arrayIterator) {
        arrayEntries.push(a);
    }

    expect([[2,3],[1,2],[0,1]]).toEqual(arrayEntries);
});

test(`entriesReverse() on list should work`, () => {
    let listIterator = entriesReverse()(fromJS([1,2,3]));

    let listEntries = [];
    for(let a of listIterator) {
        listEntries.push(a);
    }

    expect([[2,3],[1,2],[0,1]]).toEqual(listEntries);
});
