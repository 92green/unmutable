// @flow
import chunkBy from '../chunkBy';
import {fromJS} from 'immutable';

test(`chunkBy() on object should start a new chunk each time predicate returns true`, () => {
    let chunked = chunkBy((value) => value === 1)({a:3,b:2,c:1,d:3,e:1,f:1,g:10});
    expect(chunked).toEqual([
        {a:3,b:2},
        {c:1,d:3},
        {e:1},
        {f:1,g:10}
    ]);
});

test(`chunkBy() on object should cope with true being returned on first item`, () => {
    let chunked = chunkBy((value) => value === 1)({a:1,b:2,c:1});
    expect(chunked).toEqual([
        {a:1,b:2},
        {c:1}
    ]);
});

test(`chunkBy() on array should start a new chunk each time predicate returns true`, () => {
    let chunked = chunkBy((value) => value === 1)([3,2,1,3,1,1,10]);
    expect(chunked).toEqual([
        [3,2],
        [1,3],
        [1],
        [1,10]
    ]);
});

test(`chunkBy() should pass correct args to predicate`, () => {
    let predicate = jest.fn(value => value === 1);
    let chunked = chunkBy(predicate)({a:1,b:2,c:1});
    expect(predicate.mock.calls[0][0]).toBe(1);
    expect(predicate.mock.calls[0][1]).toBe("a");
    expect(predicate.mock.calls[0][2]).toEqual({a:1,b:2,c:1});
});
