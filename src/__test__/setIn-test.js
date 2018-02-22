// @flow
import setIn from '../setIn';
import test from 'ava';
import {fromJS, Map, List} from 'immutable';

//
// object
//

let objectData = {
    a: {
        b: 123
    }
};

test(`setIn() should set an existing object value`, (tt: *) => {
    tt.deepEqual(
        fromJS(objectData).setIn(['a','b'], "???").toJS(),
        setIn(['a','b'], "???")(objectData)
    );
});

test(`setIn() should set a non-existing object value`, (tt: *) => {
    tt.deepEqual(
        fromJS(objectData).setIn(['a','z'], "???").toJS(),
        setIn(['a','z'], "???")(objectData)
    );
});


test(`setIn() should set a deeply non-existing object value`, (tt: *) => {
    tt.deepEqual(
        fromJS(objectData).setIn(['aa','z'], "???").toJS(),
        setIn(['aa','z'], "???")(objectData)
    );
});

test(`setIn() should set a keyless object value`, (tt: *) => {
    tt.deepEqual(
        fromJS(objectData).setIn([], "???"),
        setIn([], "???")(objectData)
    );
});

//
// map
//

let mapData = fromJS({
    a: {
        b: 123
    }
});

test(`setIn() should set an existing Map value`, (tt: *) => {
    tt.deepEqual(
        mapData.setIn(['a','b'], "???"),
        setIn(['a','b'], "???")(mapData)
    );
});

test(`setIn() should set a non-existing Map value`, (tt: *) => {
    tt.deepEqual(
        mapData.setIn(['a','z'], "???"),
        setIn(['a','z'], "???")(mapData)
    );
});


test(`setIn() should set a deeply non-existing Map value`, (tt: *) => {
    tt.deepEqual(
        mapData.setIn(['aa','z'], "???"),
        setIn(['aa','z'], "???")(mapData)
    );
});

test(`setIn() should set a keyless Map value`, (tt: *) => {
    tt.deepEqual(
        mapData.setIn([], "???"),
        setIn([], "???")(mapData)
    );
});

//
// array
//

let arrayData = [
    123,
    [456,789,101112]
];

test(`setIn() should set an existing array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(arrayData).setIn([1,2], "???").toJS(),
        setIn([1,2], "???")(arrayData)
    );
});

test(`setIn() should set a negative array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(arrayData).setIn([-1,-1], "???").toJS(),
        setIn([-1,-1], "???")(arrayData)
    );
});

test(`setIn() should set a non-existing array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(arrayData).setIn([1,12], "???").toJS(),
        setIn([1,12], "???")(arrayData)
    );
});

test(`setIn() should set a deeply non-existent array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(arrayData).setIn([2,14], "???").toJS(),
        setIn([2,14], "???")(arrayData)
    );
});

//
// list
//

let listData = fromJS([
    123,
    [456,789,101112]
]);

test(`setIn() should set an existing list value`, (tt: *) => {
    tt.deepEqual(
        listData.setIn([1,2], "???"),
        setIn([1,2], "???")(listData)
    );
});

test(`setIn() should set a negative list value`, (tt: *) => {
    tt.deepEqual(
        listData.setIn([-1,-1], "???"),
        setIn([-1,-1], "???")(listData)
    );
});

test(`setIn() should set a non-existing list value`, (tt: *) => {
    tt.deepEqual(
        listData.setIn([1,-12], "???"),
        setIn([1,-12], "???")(listData)
    );
});

test(`setIn() should set a deeply non-existent list value`, (tt: *) => {
    tt.deepEqual(
        listData.setIn([10,14], "???"),
        setIn([10,14], "???")(listData)
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

test(`setIn() should cope with mixed values`, (tt: *) => {
    tt.deepEqual(
        mixedData.setIn(['a','b',2,0], "???"),
        setIn(['a','b',2,0], "???")(mixedData)
    );
});
