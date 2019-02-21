// @flow
import keyBy from '../keyBy';
import {Map, List} from 'immutable';

let arrayInput = [
    {id: "A", foo: "!"},
    {id: "B", foo: "?"},
    {id: "C", foo: "-"},
    {id: "A", foo: ">:("}
];

let objectInput = {
    w: {id: "A", foo: "!"},
    x: {id: "B", foo: "?"},
    y: {id: "C", foo: "-"},
    z: {id: "A", foo: ">:("}
};

let expectedOutput = {
    A: {id: "A", foo: ">:("},
    B: {id: "B", foo: "?"},
    C: {id: "C", foo: "-"}
};

test(`keyBy() on array should work`, () => {
    expect(expectedOutput).toEqual(keyBy(_ => _.id)(arrayInput));
});

test(`keyBy() on List should work`, () => {
    expect(expectedOutput).toEqual(keyBy(_ => _.id)(List(arrayInput)));
});

test(`keyBy() on object should work`, () => {
    expect(expectedOutput).toEqual(keyBy(_ => _.id)(objectInput));
});

test(`keyBy() on Map should work`, () => {
    expect(expectedOutput).toEqual(keyBy(_ => _.id)(Map(objectInput)));
});
