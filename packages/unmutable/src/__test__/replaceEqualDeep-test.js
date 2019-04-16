// @flow
import replaceEqualDeep from '../replaceEqualDeep';
import {fromJS} from 'immutable';

test(`replaceEqualDeep() on object should work when top level is deeply equal`, () => {
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

    expect(replaceEqualDeep(data)(newDataSame)).toBe(data);
    expect(replaceEqualDeep(data)(newDataSame)).toEqual(data);
    expect(replaceEqualDeep(data)(newDataDifferent)).toEqual(newDataDifferent);
    // ^ when data is different, dont care if it's not strictly equal, deep equality is all that is guaranteed
});

test(`replaceEqualDeep() on map should work when top level is deeply equal`, () => {
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

    expect(replaceEqualDeep(data)(newDataSame)).toBe(data);
    expect(replaceEqualDeep(data)(newDataSame)).toEqual(data);
    expect(replaceEqualDeep(data)(newDataDifferent)).toEqual(newDataDifferent);
    // ^ when data is different, dont care if it's not strictly equal, deep equality is all that is guaranteed
});

test(`replaceEqualDeep() on object should work when a child is deeply equal`, () => {
    let data = {
        a: 1,
        b: {
            c: 2
        }
    };

    let newDataDifferent = {
        a: 10,
        b: {
            c: 2
        }
    };

    expect(replaceEqualDeep(data)(newDataDifferent)).toEqual(newDataDifferent);
    expect(replaceEqualDeep(data)(newDataDifferent)).not.toBe(newDataDifferent);
    expect(replaceEqualDeep(data)(newDataDifferent).b).toBe(data.b);
    expect(replaceEqualDeep(data)(newDataDifferent).b).toEqual(data.b);
});

test(`replaceEqualDeep() should cope with children of different types`, () => {
    let data = {
        a: 1,
        b: 123
    };

    let newDataDifferent = {
        a: 10,
        b: {
            c: 2
        }
    };

    expect(replaceEqualDeep(data)(newDataDifferent)).toEqual(newDataDifferent);
});
