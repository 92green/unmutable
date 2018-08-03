// @flow
import updateIn from '../updateIn';
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

test(`updateIn() should update an existing object value`, (t: *) => {
    t.deepEqual(
        fromJS(objectData).updateIn(['a','b'], () => "???").toJS(),
        updateIn(['a','b'], () => "???")(objectData)
    );
});

test(`updateIn() should receive value when an existing object value`, (t: *) => {
    t.plan(1);
    updateIn(['a','b'], (value) => {
        t.is(
            123,
            value
        );
        return value;
    })(objectData);

});

test(`updateIn() should update a non-existing object value`, (t: *) => {
    t.deepEqual(
        fromJS(objectData).updateIn(['a','z'], () => "???").toJS(),
        updateIn(['a','z'], () => "???")(objectData)
    );
});

test(`updateIn() should receive undefined when updating an existing object value`, (t: *) => {
    t.plan(1);
    updateIn(['a','z'], (value) => {
        t.is(
            undefined,
            value
        );
        return value;
    })(objectData);
});

test(`updateIn() should update a non-existing object value with notSetValue`, (t: *) => {
    t.deepEqual(
        fromJS(objectData).updateIn(['a','z'], "NOTSET", ii => ii+"!").toJS(),
        updateIn(['a','z'], "NOTSET", ii => ii+"!")(objectData)
    );
});

test(`updateIn() should NOT update a non-existing object value with notSetValue if notSetValue is strictly equal to reult of updater`, (t: *) => {
    t.deepEqual(
        fromJS(objectData).updateIn(['a','z'], "NOTSET", ii => ii).toJS(),
        updateIn(['a','z'], "NOTSET", ii => ii)(objectData)
    );
});

test(`updateIn() should receive notSetValue when updating an existing object value`, (t: *) => {
    t.plan(1);
    updateIn(['a','z'], "NOTSET", (value) => {
        t.is(
            "NOTSET",
            value
        );
        return value;
    })(objectData);
});

test(`updateIn() should update a deeply non-existing object value`, (t: *) => {
    t.deepEqual(
        fromJS(objectData).updateIn(['aa','z'], () => "???").toJS(),
        updateIn(['aa','z'], () => "???")(objectData)
    );
});

test(`updateIn() should update a keyless object value`, (t: *) => {
    t.deepEqual(
        fromJS(objectData).updateIn([], () => "???"),
        updateIn([], () => "???")(objectData)
    );
});

test(`updateIn() should receive original value when updating a keyless object value`, (t: *) => {
    t.plan(1);
    updateIn([], (value) => {
        t.is(
            objectData,
            value
        );
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

test(`updateIn() should update an existing Map value`, (t: *) => {
    t.deepEqual(
        mapData.updateIn(['a','b'], () => "???"),
        updateIn(['a','b'], () => "???")(mapData)
    );
});

test(`updateIn() should update a non-existing Map value`, (t: *) => {
    t.deepEqual(
        mapData.updateIn(['a','z'], () => "???"),
        updateIn(['a','z'], () => "???")(mapData)
    );
});


test(`updateIn() should update a deeply non-existing Map value`, (t: *) => {
    t.deepEqual(
        mapData.updateIn(['aa','z'], () => "???"),
        updateIn(['aa','z'], () => "???")(mapData)
    );
});

test(`updateIn() should update a keyless Map value`, (t: *) => {
    t.deepEqual(
        mapData.updateIn([], () => "???"),
        updateIn([], () => "???")(mapData)
    );
});

//
// array
//

let arrayData = [
    123,
    [456,789,101112]
];

test(`updateIn() should update an existing array value`, (t: *) => {
    t.deepEqual(
        fromJS(arrayData).updateIn([1,2], () => "???").toJS(),
        updateIn([1,2], () => "???")(arrayData)
    );
});

test(`updateIn() should update a negative array value`, (t: *) => {
    t.deepEqual(
        fromJS(arrayData).updateIn([-1,-1], () => "???").toJS(),
        updateIn([-1,-1], () => "???")(arrayData)
    );
});

test(`updateIn() should update a non-existing array value`, (t: *) => {
    t.deepEqual(
        fromJS(arrayData).updateIn([1,12], () => "???").toJS(),
        updateIn([1,12], () => "???")(arrayData)
    );
});

test(`updateIn() should update a deeply non-existent array value`, (t: *) => {
    t.deepEqual(
        fromJS(arrayData).updateIn([2,14], () => "???").toJS(),
        updateIn([2,14], () => "???")(arrayData)
    );
});

//
// list
//

let listData = fromJS([
    123,
    [456,789,101112]
]);

test(`updateIn() should update an existing list value`, (t: *) => {
    t.deepEqual(
        listData.updateIn([1,2], () => "???"),
        updateIn([1,2], () => "???")(listData)
    );
});

test(`updateIn() should update a negative list value`, (t: *) => {
    t.deepEqual(
        listData.updateIn([-1,-1], () => "???"),
        updateIn([-1,-1], () => "???")(listData)
    );
});

test(`updateIn() should update a non-existing list value`, (t: *) => {
    t.deepEqual(
        listData.updateIn([1,-12], () => "???"),
        updateIn([1,-12], () => "???")(listData)
    );
});

test(`updateIn() should update a deeply non-existent list value`, (t: *) => {
    t.deepEqual(
        listData.updateIn([10,14], () => "???"),
        updateIn([10,14], () => "???")(listData)
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

test(`updateIn() should cope with mixed values`, (t: *) => {
    t.deepEqual(
        mixedData.updateIn(['a','b',2,0], () => "???"),
        updateIn(['a','b',2,0], () => "???")(mixedData)
    );
});
