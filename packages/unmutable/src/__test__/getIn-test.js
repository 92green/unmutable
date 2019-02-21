// @flow
import getIn from '../getIn';
import {fromJS, Map, List} from 'immutable';

let data = {
    a: {
        b: 123
    }
};

test(`getIn() should find a value`, () => {
    expect(fromJS(data).getIn(['a','b'])).toEqual(getIn(['a','b'])(data));
});

test(`getIn() should miss a value`, () => {
    expect(fromJS(data).getIn(['a','z'])).toEqual(getIn(['a','z'])(data));
});

test(`getIn() should miss a value with a notSetValue`, () => {
    expect(fromJS(data).getIn(['a','z'], "???")).toEqual(getIn(['a','z'], "???")(data));
});

test(`getIn() should deeply miss a value`, () => {
    expect(fromJS(data).getIn(['aa','z'])).toEqual(getIn(['aa','z'])(data));
});

test(`getIn() should overshoot a value`, () => {
    expect(fromJS(data).getIn(['a','b','c'])).toEqual(getIn(['a','b','c'])(data));
});

test(`getIn() should find a keyless value`, () => {
    expect(fromJS(data).getIn([])).toEqual(getIn([])(data));

    expect(data).toEqual(getIn([])(data));
});


data = [
    123,
    [456,789,101112]
];

test(`getIn() should find an array value`, () => {
    expect(fromJS(data).getIn([1,2])).toEqual(getIn([1,2])(data));
});

test(`getIn() should find a negative array value`, () => {
    expect(fromJS(data).getIn([-1,-1])).toEqual(getIn([-1,-1])(data));
});

test(`getIn() should miss an array value`, () => {
    expect(fromJS(data).getIn([1,-12])).toEqual(getIn([1,-12])(data));
});

test(`getIn() should miss an array value with a notSetValue`, () => {
    expect(fromJS(data).getIn([0,-12], "???")).toEqual(getIn([0,-12], "???")(data));
});

test(`getIn() should deeply miss an array value`, () => {
    expect(fromJS(data).getIn([10,14])).toEqual(getIn([10,14])(data));
});

test(`getIn() should overshoot an array value`, () => {
    expect(fromJS(data).getIn([0,0,0,0])).toEqual(getIn([0,0,0,0])(data));
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

test(`getIn() should cope with mixed values`, () => {
    expect(3).toBe(getIn(['a','b',2,0])(data));
});

