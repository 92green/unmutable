// @flow
import deleteIn from '../deleteIn';
import test from 'ava';
import {fromJS, Map, List} from 'immutable';

//
// object
//

let objectData = {
    a: {
        b: 123,
        c: 456
    }
};

test(`deleteIn() should delete an existing object value`, (t: *) => {
    t.deepEqual(
        fromJS(objectData).deleteIn(['a','b']).toJS(),
        deleteIn(['a','b'])(objectData)
    );
});

test(`deleteIn() should delete a non-existing object value`, (t: *) => {
    t.deepEqual(
        fromJS(objectData).deleteIn(['a','z']).toJS(),
        deleteIn(['a','z'])(objectData)
    );
});


test(`deleteIn() should delete a deeply non-existing object value`, (t: *) => {
    t.deepEqual(
        fromJS(objectData).deleteIn(['aa','z']).toJS(),
        deleteIn(['aa','z'])(objectData)
    );
});

test(`deleteIn() should delete a keyless object value`, (t: *) => {
    t.deepEqual(
        fromJS(objectData).deleteIn([]),
        deleteIn([])(objectData)
    );
});

//
// map
//

let mapData = fromJS({
    a: {
        b: 123,
        c: 456
    }
});

test(`deleteIn() should delete an existing Map value`, (t: *) => {
    t.deepEqual(
        mapData.deleteIn(['a','b']),
        deleteIn(['a','b'])(mapData)
    );
});

test(`deleteIn() should delete a non-existing Map value`, (t: *) => {
    t.deepEqual(
        mapData.deleteIn(['a','z']),
        deleteIn(['a','z'])(mapData)
    );
});


test(`deleteIn() should delete a deeply non-existing Map value`, (t: *) => {
    t.deepEqual(
        mapData.deleteIn(['aa','z']),
        deleteIn(['aa','z'])(mapData)
    );
});

test(`deleteIn() should delete a keyless Map value`, (t: *) => {
    t.deepEqual(
        mapData.deleteIn([]),
        deleteIn([])(mapData)
    );
});

//
// array
//

let arrayData = [
    123,
    [456,789,101112]
];

test(`deleteIn() should delete an existing array value`, (t: *) => {
    t.deepEqual(
        fromJS(arrayData).deleteIn([1,2]).toJS(),
        deleteIn([1,2])(arrayData)
    );
});

test(`deleteIn() should delete a negative array value`, (t: *) => {
    t.deepEqual(
        fromJS(arrayData).deleteIn([-1,-1]).toJS(),
        deleteIn([-1,-1])(arrayData)
    );
});

test(`deleteIn() should delete a non-existing array value`, (t: *) => {
    t.deepEqual(
        fromJS(arrayData).deleteIn([1,12]).toJS(),
        deleteIn([1,12])(arrayData)
    );
});

test(`deleteIn() should delete a deeply non-existent array value`, (t: *) => {
    t.deepEqual(
        fromJS(arrayData).deleteIn([2,14]).toJS(),
        deleteIn([2,14])(arrayData)
    );
});

//
// list
//

let listData = fromJS([
    123,
    [456,789,101112]
]);

test(`deleteIn() should delete an existing list value`, (t: *) => {
    t.deepEqual(
        listData.deleteIn([1,2]),
        deleteIn([1,2])(listData)
    );
});

test(`deleteIn() should delete a negative list value`, (t: *) => {
    t.deepEqual(
        listData.deleteIn([-1,-1]),
        deleteIn([-1,-1])(listData)
    );
});

test(`deleteIn() should delete a non-existing list value`, (t: *) => {
    t.deepEqual(
        listData.deleteIn([1,-12]),
        deleteIn([1,-12])(listData)
    );
});

test(`deleteIn() should delete a deeply non-existent list value`, (t: *) => {
    t.deepEqual(
        listData.deleteIn([10,14]),
        deleteIn([10,14])(listData)
    );
});

//
// mixed
//

let mixedData = Map({
    a: {
        b: List([
            0,
            1,
            [3]
        ])
    }
});

test(`deleteIn() should cope with mixed values`, (t: *) => {
    t.deepEqual(
        mixedData.deleteIn(['a','b',2,0]),
        deleteIn(['a','b',2,0])(mixedData)
    );
});
