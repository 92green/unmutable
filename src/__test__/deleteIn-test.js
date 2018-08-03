// @flow
import deleteIn from '../deleteIn';
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

test(`deleteIn() should delete an existing object value`, () => {
    expect(fromJS(objectData).deleteIn(['a','b']).toJS()).toEqual(deleteIn(['a','b'])(objectData));
});

test(`deleteIn() should delete a non-existing object value`, () => {
    expect(fromJS(objectData).deleteIn(['a','z']).toJS()).toEqual(deleteIn(['a','z'])(objectData));
});


test(`deleteIn() should delete a deeply non-existing object value`, () => {
    expect(fromJS(objectData).deleteIn(['aa','z']).toJS()).toEqual(deleteIn(['aa','z'])(objectData));
});

test(`deleteIn() should delete a keyless object value`, () => {
    expect(fromJS(objectData).deleteIn([])).toEqual(deleteIn([])(objectData));
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

test(`deleteIn() should delete an existing Map value`, () => {
    expect(mapData.deleteIn(['a','b'])).toEqual(deleteIn(['a','b'])(mapData));
});

test(`deleteIn() should delete a non-existing Map value`, () => {
    expect(mapData.deleteIn(['a','z'])).toEqual(deleteIn(['a','z'])(mapData));
});


test(`deleteIn() should delete a deeply non-existing Map value`, () => {
    expect(mapData.deleteIn(['aa','z'])).toEqual(deleteIn(['aa','z'])(mapData));
});

test(`deleteIn() should delete a keyless Map value`, () => {
    expect(mapData.deleteIn([])).toEqual(deleteIn([])(mapData));
});

//
// array
//

let arrayData = [
    123,
    [456,789,101112]
];

test(`deleteIn() should delete an existing array value`, () => {
    expect(fromJS(arrayData).deleteIn([1,2]).toJS()).toEqual(deleteIn([1,2])(arrayData));
});

test(`deleteIn() should delete a negative array value`, () => {
    expect(fromJS(arrayData).deleteIn([-1,-1]).toJS()).toEqual(deleteIn([-1,-1])(arrayData));
});

test(`deleteIn() should delete a non-existing array value`, () => {
    expect(fromJS(arrayData).deleteIn([1,12]).toJS()).toEqual(deleteIn([1,12])(arrayData));
});

test(`deleteIn() should delete a deeply non-existent array value`, () => {
    expect(fromJS(arrayData).deleteIn([2,14]).toJS()).toEqual(deleteIn([2,14])(arrayData));
});

//
// list
//

let listData = fromJS([
    123,
    [456,789,101112]
]);

test(`deleteIn() should delete an existing list value`, () => {
    expect(listData.deleteIn([1,2])).toEqual(deleteIn([1,2])(listData));
});

test(`deleteIn() should delete a negative list value`, () => {
    expect(listData.deleteIn([-1,-1])).toEqual(deleteIn([-1,-1])(listData));
});

test(`deleteIn() should delete a non-existing list value`, () => {
    expect(listData.deleteIn([1,-12])).toEqual(deleteIn([1,-12])(listData));
});

test(`deleteIn() should delete a deeply non-existent list value`, () => {
    expect(listData.deleteIn([10,14])).toEqual(deleteIn([10,14])(listData));
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

test(`deleteIn() should cope with mixed values`, () => {
    expect(mixedData.deleteIn(['a','b',2,0])).toEqual(deleteIn(['a','b',2,0])(mixedData));
});
