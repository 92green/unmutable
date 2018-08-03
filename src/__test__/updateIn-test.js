// @flow
import updateIn from '../updateIn';
import {fromJS, Map, List} from 'immutable';

//
// object
//

let objectData = {
    a: {
        b: 123
    }
};

test(`updateIn() should update an existing object value`, () => {
    expect(fromJS(objectData).updateIn(['a','b'], () => "???").toJS()).toEqual(updateIn(['a','b'], () => "???")(objectData));
});

test(`updateIn() should receive value when an existing object value`, () => {
    expect.assertions(1);
    updateIn(['a','b'], (value) => {
        expect(123).toBe(value);
        return value;
    })(objectData);

});

test(`updateIn() should update a non-existing object value`, () => {
    expect(fromJS(objectData).updateIn(['a','z'], () => "???").toJS()).toEqual(updateIn(['a','z'], () => "???")(objectData));
});

test(`updateIn() should receive undefined when updating an existing object value`, () => {
    expect.assertions(1);
    updateIn(['a','z'], (value) => {
        expect(undefined).toBe(value);
        return value;
    })(objectData);
});

test(`updateIn() should update a non-existing object value with notSetValue`, () => {
    expect(fromJS(objectData).updateIn(['a','z'], "NOTSET", ii => ii+"!").toJS()).toEqual(updateIn(['a','z'], "NOTSET", ii => ii+"!")(objectData));
});

test(`updateIn() should NOT update a non-existing object value with notSetValue if notSetValue is strictly equal to reult of updater`, () => {
    expect(fromJS(objectData).updateIn(['a','z'], "NOTSET", ii => ii).toJS()).toEqual(updateIn(['a','z'], "NOTSET", ii => ii)(objectData));
});

test(`updateIn() should receive notSetValue when updating an existing object value`, () => {
    expect.assertions(1);
    updateIn(['a','z'], "NOTSET", (value) => {
        expect("NOTSET").toBe(value);
        return value;
    })(objectData);
});

test(`updateIn() should update a deeply non-existing object value`, () => {
    expect(fromJS(objectData).updateIn(['aa','z'], () => "???").toJS()).toEqual(updateIn(['aa','z'], () => "???")(objectData));
});

test(`updateIn() should update a keyless object value`, () => {
    expect(fromJS(objectData).updateIn([], () => "???")).toEqual(updateIn([], () => "???")(objectData));
});

test(`updateIn() should receive original value when updating a keyless object value`, () => {
    expect.assertions(1);
    updateIn([], (value) => {
        expect(objectData).toBe(value);
        return value;
    })(objectData);

});

//
// map
//

let mapData = fromJS({
    a: {
        b: 123
    }
});

test(`updateIn() should update an existing Map value`, () => {
    expect(mapData.updateIn(['a','b'], () => "???")).toEqual(updateIn(['a','b'], () => "???")(mapData));
});

test(`updateIn() should update a non-existing Map value`, () => {
    expect(mapData.updateIn(['a','z'], () => "???")).toEqual(updateIn(['a','z'], () => "???")(mapData));
});


test(`updateIn() should update a deeply non-existing Map value`, () => {
    expect(mapData.updateIn(['aa','z'], () => "???")).toEqual(updateIn(['aa','z'], () => "???")(mapData));
});

test(`updateIn() should update a keyless Map value`, () => {
    expect(mapData.updateIn([], () => "???")).toEqual(updateIn([], () => "???")(mapData));
});

//
// array
//

let arrayData = [
    123,
    [456,789,101112]
];

test(`updateIn() should update an existing array value`, () => {
    expect(fromJS(arrayData).updateIn([1,2], () => "???").toJS()).toEqual(updateIn([1,2], () => "???")(arrayData));
});

test(`updateIn() should update a negative array value`, () => {
    expect(fromJS(arrayData).updateIn([-1,-1], () => "???").toJS()).toEqual(updateIn([-1,-1], () => "???")(arrayData));
});

test(`updateIn() should update a non-existing array value`, () => {
    expect(fromJS(arrayData).updateIn([1,12], () => "???").toJS()).toEqual(updateIn([1,12], () => "???")(arrayData));
});

test(`updateIn() should update a deeply non-existent array value`, () => {
    expect(fromJS(arrayData).updateIn([2,14], () => "???").toJS()).toEqual(updateIn([2,14], () => "???")(arrayData));
});

//
// list
//

let listData = fromJS([
    123,
    [456,789,101112]
]);

test(`updateIn() should update an existing list value`, () => {
    expect(listData.updateIn([1,2], () => "???")).toEqual(updateIn([1,2], () => "???")(listData));
});

test(`updateIn() should update a negative list value`, () => {
    expect(listData.updateIn([-1,-1], () => "???")).toEqual(updateIn([-1,-1], () => "???")(listData));
});

test(`updateIn() should update a non-existing list value`, () => {
    expect(listData.updateIn([1,-12], () => "???")).toEqual(updateIn([1,-12], () => "???")(listData));
});

test(`updateIn() should update a deeply non-existent list value`, () => {
    expect(listData.updateIn([10,14], () => "???")).toEqual(updateIn([10,14], () => "???")(listData));
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

test(`updateIn() should cope with mixed values`, () => {
    expect(mixedData.updateIn(['a','b',2,0], () => "???")).toEqual(updateIn(['a','b',2,0], () => "???")(mixedData));
});
