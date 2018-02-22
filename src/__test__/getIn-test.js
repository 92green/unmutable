// @flow
import getIn from '../getIn';
import test from 'ava';
import {fromJS, Map, List} from 'immutable';

let data = {
    a: {
        b: 123
    }
};

test(`getIn() should find a value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn(['a','b']),
        getIn(['a','b'])(data)
    );
});

test(`getIn() should miss a value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn(['a','z']),
        getIn(['a','z'])(data)
    );
});

test(`getIn() should miss a value with a notSetValue`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn(['a','z'], "???"),
        getIn(['a','z'], "???")(data)
    );
});

test(`getIn() should deeply miss a value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn(['aa','z']),
        getIn(['aa','z'])(data)
    );
});

test(`getIn() should overshoot a value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn(['a','b','c']),
        getIn(['a','b','c'])(data)
    );
});

test(`getIn() should find a keyless value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn([]),
        getIn([])(data)
    );

    tt.deepEqual(
        data,
        getIn([])(data)
    );
});


data = [
    123,
    [456,789,101112]
];

test(`getIn() should find an array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn([1,2]),
        getIn([1,2])(data)
    );
});

test(`getIn() should find a negative array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn([-1,-1]),
        getIn([-1,-1])(data)
    );
});

test(`getIn() should miss an array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn([1,-12]),
        getIn([1,-12])(data)
    );
});

test(`getIn() should miss an array value with a notSetValue`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn([0,-12], "???"),
        getIn([0,-12], "???")(data)
    );
});

test(`getIn() should deeply miss an array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn([10,14]),
        getIn([10,14])(data)
    );
});

test(`getIn() should overshoot an array value`, (tt: *) => {
    tt.deepEqual(
        fromJS(data).getIn([0,0,0,0]),
        getIn([0,0,0,0])(data)
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

test(`getIn() should cope with mixed values`, (tt: *) => {
    tt.is(3, getIn(['a','b',2,0])(data));
});

