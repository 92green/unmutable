// @flow
import hasIn from '../hasIn';
import test from 'ava';
import {fromJS, Map, List} from 'immutable';

let data = {
    a: {
        b: 123
    }
};

test(`hasIn() should find a value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).hasIn(['a','b']),
        hasIn(['a','b'])(data)
    );
});

test(`hasIn() should miss a value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).hasIn(['a','z']),
        hasIn(['a','z'])(data)
    );
});


test(`hasIn() should deeply miss a value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).hasIn(['aa','z']),
        hasIn(['aa','z'])(data)
    );
});

test(`hasIn() should overshoot a value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).hasIn(['a','b','c']),
        hasIn(['a','b','c'])(data)
    );
});

test(`hasIn() should find a keyless value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).hasIn([]),
        hasIn([])(data)
    );
});


data = [
    123,
    [456,789,101112]
];

test(`hasIn() should find an array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).hasIn([1,2]),
        hasIn([1,2])(data)
    );
});

test(`hasIn() should find a negative array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).hasIn([-1,-1]),
        hasIn([-1,-1])(data)
    );
});

test(`hasIn() should miss an array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).hasIn([1,-12]),
        hasIn([1,-12])(data)
    );
});


test(`hasIn() should deeply miss an array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).hasIn([10,14]),
        hasIn([10,14])(data)
    );
});

test(`hasIn() should overshoot an array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).hasIn([0,0,0,0]),
        hasIn([0,0,0,0])(data)
    );
});

data = Map({
    a: {
        b: List([
            0,
            1,
            [3]
        ])
    }
});

test(`hasIn() should cope with mixed values`, (tt: *) => {
    tt.true(hasIn(['a','b',2,0])(data));
});

