// @flow
import hasIn from '../hasIn';
import {fromJS, Map, List} from 'immutable';

let data = {
    a: {
        b: 123
    }
};

test(`hasIn() should find a value`, () => {
    expect(fromJS(data).hasIn(['a','b'])).toEqual(hasIn(['a','b'])(data));
});

test(`hasIn() should miss a value`, () => {
    expect(fromJS(data).hasIn(['a','z'])).toEqual(hasIn(['a','z'])(data));
});


test(`hasIn() should deeply miss a value`, () => {
    expect(fromJS(data).hasIn(['aa','z'])).toEqual(hasIn(['aa','z'])(data));
});

test(`hasIn() should overshoot a value`, () => {
    expect(fromJS(data).hasIn(['a','b','c'])).toEqual(hasIn(['a','b','c'])(data));
});

test(`hasIn() should find a keyless value`, () => {
    expect(fromJS(data).hasIn([])).toEqual(hasIn([])(data));
});


data = [
    123,
    [456,789,101112]
];

test(`hasIn() should find an array value`, () => {
    expect(fromJS(data).hasIn([1,2])).toEqual(hasIn([1,2])(data));
});

test(`hasIn() should find a negative array value`, () => {
    expect(fromJS(data).hasIn([-1,-1])).toEqual(hasIn([-1,-1])(data));
});

test(`hasIn() should miss an array value`, () => {
    expect(fromJS(data).hasIn([1,-12])).toEqual(hasIn([1,-12])(data));
});


test(`hasIn() should deeply miss an array value`, () => {
    expect(fromJS(data).hasIn([10,14])).toEqual(hasIn([10,14])(data));
});

test(`hasIn() should overshoot an array value`, () => {
    expect(fromJS(data).hasIn([0,0,0,0])).toEqual(hasIn([0,0,0,0])(data));
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

test(`hasIn() should cope with mixed values`, () => {
    expect(hasIn(['a','b',2,0])(data)).toBe(true);
});

