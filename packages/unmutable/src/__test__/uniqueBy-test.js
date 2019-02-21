// @flow
import get from '../get';
import uniqueBy from '../uniqueBy';
import {fromJS} from 'immutable';

test(`uniqueBy() on object should work`, () => {
    let data = {
        a: {type: "foo", value: 1},
        b: {type: "bar", value: 2},
        c: {type: "foo", value: 3}
    };

    let expectedData = {
        a: {type: "foo", value: 1},
        b: {type: "bar", value: 2}
    };

    expect(uniqueBy(get('type'))(data)).toEqual(expectedData);
});

test(`uniqueBy() on map should work`, () => {
    let data = fromJS({
        a: {type: "foo", value: 1},
        b: {type: "bar", value: 2},
        c: {type: "foo", value: 3}
    });

    let expectedData = {
        a: {type: "foo", value: 1},
        b: {type: "bar", value: 2}
    };

    expect(uniqueBy(get('type'))(data).toJS()).toEqual(expectedData);
});

test(`uniqueBy() on simple array should work`, () => {
    let data = [1,2,1,3,1,4];
    let expectedData = [1,2,3,4];

    expect(uniqueBy(_ => _)(data)).toEqual(expectedData);
});

test(`uniqueBy() on array should work`, () => {
    let data = [
        {type: "foo", value: 1},
        {type: "bar", value: 2},
        {type: "foo", value: 3}
    ];

    let expectedData = [
        {type: "foo", value: 1},
        {type: "bar", value: 2}
    ];

    expect(uniqueBy(get('type'))(data)).toEqual(expectedData);
});

test(`uniqueBy() on array with uniqueness based on deep object equality`, () => {
    let data = [
        {type: {a:1,b:2}, value: 1},
        {type: {a:2,b:2}, value: 2},
        {type: {a:1,b:2}, value: 3}
    ];

    let expectedData = [
        {type: {a:1,b:2}, value: 1},
        {type: {a:2,b:2}, value: 2}
    ];

    expect(uniqueBy(get('type'))(data)).toEqual(expectedData);
});

test(`uniqueBy() on array should work`, () => {
    let data = fromJS([
        {type: "foo", value: 1},
        {type: "bar", value: 2},
        {type: "foo", value: 3}
    ]);

    let expectedData = [
        {type: "foo", value: 1},
        {type: "bar", value: 2}
    ];

    expect(uniqueBy(get('type'))(data).toJS()).toEqual(expectedData);
});
