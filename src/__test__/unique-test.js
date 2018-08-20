// @flow
import get from '../get';
import unique from '../unique';
import {fromJS} from 'immutable';

test(`unique() on object should work`, () => {
    let data = {
        a: 1,
        b: 2,
        c: 1,
        d: undefined,
        e: 3,
        f: undefined
    };

    let expectedData = {
        a: 1,
        b: 2,
        d: undefined,
        e: 3
    };

    expect(unique()(data)).toEqual(expectedData);
});

test(`unique() on map should work`, () => {
    let data = fromJS({
        a: 1,
        b: 2,
        c: 1,
        d: 3
    });

    let expectedData = fromJS({
        a: 1,
        b: 2,
        d: 3
    });

    expect(unique()(data)).toEqual(expectedData);
});

test(`unique() on array should work`, () => {
    let data = [1,2,1,3,1,4];
    let expectedData = [1,2,3,4];

    expect(unique()(data)).toEqual(expectedData);
});

test(`unique() on array with uniqueness based on deep object equality`, () => {
    let data = [
        {abc: 123},
        {abc: 456},
        {def: 123},
        {abc: 456},
        {def: 789}
    ];

    let expectedData = [
        {abc: 123},
        {abc: 456},
        {def: 123},
        {def: 789}
    ];

    expect(unique()(data)).toEqual(expectedData);
});


test(`unique() on list should work`, () => {
    let data = fromJS([1,2,1,3,1,4]);
    let expectedData = [1,2,3,4];

    expect(unique()(data).toJS()).toEqual(expectedData);
});
