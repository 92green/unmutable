// @flow
import setIn from '../setIn';
import {fromJS, Map, List} from 'immutable';

//
// object
//

let objectData = {
    a: {
        b: 123
    }
};

test(`setIn() should set an existing object value`, () => {
    expect(fromJS(objectData).setIn(['a','b'], "???").toJS()).toEqual(setIn(['a','b'], "???")(objectData));
});

test(`setIn() should set a non-existing object value`, () => {
    expect(fromJS(objectData).setIn(['a','z'], "???").toJS()).toEqual(setIn(['a','z'], "???")(objectData));
});


test(`setIn() should set a deeply non-existing object value`, () => {
    expect(fromJS(objectData).setIn(['aa','z'], "???").toJS()).toEqual(setIn(['aa','z'], "???")(objectData));
});

test(`setIn() should set a keyless object value`, () => {
    expect(fromJS(objectData).setIn([], "???")).toEqual(setIn([], "???")(objectData));
});

//
// map
//

let mapData = fromJS({
    a: {
        b: 123
    }
});

test(`setIn() should set an existing Map value`, () => {
    expect(mapData.setIn(['a','b'], "???")).toEqual(setIn(['a','b'], "???")(mapData));
});

test(`setIn() should set a non-existing Map value`, () => {
    expect(mapData.setIn(['a','z'], "???")).toEqual(setIn(['a','z'], "???")(mapData));
});


test(`setIn() should set a deeply non-existing Map value`, () => {
    expect(mapData.setIn(['aa','z'], "???")).toEqual(setIn(['aa','z'], "???")(mapData));
});

test(`setIn() should set a keyless Map value`, () => {
    expect(mapData.setIn([], "???")).toEqual(setIn([], "???")(mapData));
});

//
// array
//

let arrayData = [
    123,
    [456,789,101112]
];

test(`setIn() should set an existing array value`, () => {
    expect(fromJS(arrayData).setIn([1,2], "???").toJS()).toEqual(setIn([1,2], "???")(arrayData));
});

test(`setIn() should set a negative array value`, () => {
    expect(fromJS(arrayData).setIn([-1,-1], "???").toJS()).toEqual(setIn([-1,-1], "???")(arrayData));
});

test(`setIn() should set a non-existing array value`, () => {
    expect(fromJS(arrayData).setIn([1,12], "???").toJS()).toEqual(setIn([1,12], "???")(arrayData));
});

test(`setIn() should set a deeply non-existent array value`, () => {
    expect(fromJS(arrayData).setIn([2,14], "???").toJS()).toEqual(setIn([2,14], "???")(arrayData));
});

//
// list
//

let listData = fromJS([
    123,
    [456,789,101112]
]);

test(`setIn() should set an existing list value`, () => {
    expect(listData.setIn([1,2], "???")).toEqual(setIn([1,2], "???")(listData));
});

test(`setIn() should set a negative list value`, () => {
    expect(listData.setIn([-1,-1], "???")).toEqual(setIn([-1,-1], "???")(listData));
});

test(`setIn() should set a non-existing list value`, () => {
    expect(listData.setIn([1,-12], "???")).toEqual(setIn([1,-12], "???")(listData));
});

test(`setIn() should set a deeply non-existent list value`, () => {
    expect(listData.setIn([10,14], "???")).toEqual(setIn([10,14], "???")(listData));
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

test(`setIn() should cope with mixed values`, () => {
    expect(mixedData.setIn(['a','b',2,0], "???")).toEqual(setIn(['a','b',2,0], "???")(mixedData));
});
