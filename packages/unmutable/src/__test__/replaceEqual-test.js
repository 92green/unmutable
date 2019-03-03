// @flow
import replaceEqual from '../replaceEqual';
import {fromJS} from 'immutable';

test(`replaceEqual() on object should work`, () => {
    let data = {
        a: 1,
        b: {
            c: 2
        }
    };

    let newDataSame = {
        a: 1,
        b: {
            c: 2
        }
    };

    let newDataDifferent = {
        a: 1,
        b: {
            c: 2,
            d: undefined
        }
    };

    expect(replaceEqual(data)(newDataSame)).toBe(data);
    expect(replaceEqual(data)(newDataSame)).toEqual(data);
    expect(replaceEqual(data)(newDataDifferent)).toEqual(newDataDifferent);
    // ^ when data is different, dont care if it's not strictly equal, deep equality is all that is guaranteed
});

test(`replaceEqual() on map should work`, () => {
    let data = fromJS({
        a: 1,
        b: {
            c: 2
        }
    });

    let newDataSame = fromJS({
        a: 1,
        b: {
            c: 2
        }
    });

    let newDataDifferent = fromJS({
        a: 1,
        b: {
            c: 2,
            d: undefined
        }
    });

    expect(replaceEqual(data)(newDataSame)).toBe(data);
    expect(replaceEqual(data)(newDataSame)).toEqual(data);
    expect(replaceEqual(data)(newDataDifferent)).toEqual(newDataDifferent);
    // ^ when data is different, dont care if it's not strictly equal, deep equality is all that is guaranteed
});
