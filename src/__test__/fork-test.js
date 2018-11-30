// @flow
import fork from '../fork';
import {Map, List} from 'immutable';

test(`fork() on object should work`, () => {
    let output = fork({
        abc: num => num * 1,
        def: num => num * 2,
        ghi: num => num * 3
    });

    let expectedOutput = {
        abc: 123,
        def: 246,
        ghi: 369
    };

    expect(output(123)).toEqual(expectedOutput);
});

test(`fork() on Map should work`, () => {
    let output = fork(Map({
        abc: num => num * 1,
        def: num => num * 2,
        ghi: num => num * 3
    }));

    let expectedOutput = {
        abc: 123,
        def: 246,
        ghi: 369
    };

    expect(output(123).toJS()).toEqual(expectedOutput);
});


test(`fork() on array should work`, () => {
    let output = fork([
        num => num * 1,
        num => num * 2,
        num => num * 3
    ]);

    let expectedOutput = [
        123,
        246,
        369
    ];

    expect(output(123)).toEqual(expectedOutput);
});

test(`fork() on List should work`, () => {
    let output = fork(List([
        num => num * 1,
        num => num * 2,
        num => num * 3
    ]));

    let expectedOutput = [
        123,
        246,
        369
    ];

    expect(output(123).toJS()).toEqual(expectedOutput);
});
