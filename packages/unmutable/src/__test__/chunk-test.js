// @flow
import chunk from '../chunk';
import {fromJS} from 'immutable';

test(`chunk() on object should make chunks`, () => {
    expect(chunk(1)({a:1,b:2,c:3})).toEqual([
        {a:1},
        {b:2},
        {c:3}
    ]);

    expect(chunk(2)({a:1,b:2,c:3})).toEqual([
        {a:1,b:2},
        {c:3}
    ]);

    expect(chunk(3)({a:1,b:2,c:3})).toEqual([
        {a:1,b:2,c:3}
    ]);
});

test(`chunk() on map should make chunks`, () => {
    expect(chunk(2)(fromJS({a:1,b:2,c:3}))).toEqual([
        fromJS({a:1,b:2}),
        fromJS({c:3})
    ]);
});

test(`chunk() on array should make chunks`, () => {
    expect(chunk(1)([1,2,3])).toEqual([
        [1],
        [2],
        [3]
    ]);

    expect(chunk(2)([1,2,3])).toEqual([
        [1,2],
        [3]
    ]);

    expect(chunk(3)([1,2,3])).toEqual([
        [1,2,3]
    ]);
});

test(`chunk() on list should make chunks`, () => {
    expect(chunk(1)(fromJS([1,2,3]))).toEqual([
        fromJS([1]),
        fromJS([2]),
        fromJS([3])
    ]);

    expect(chunk(2)(fromJS([1,2,3]))).toEqual([
        fromJS([1,2]),
        fromJS([3])
    ]);

    expect(chunk(3)(fromJS([1,2,3]))).toEqual([
        fromJS([1,2,3])
    ]);
});
