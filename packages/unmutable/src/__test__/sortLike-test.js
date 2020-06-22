// @flow
import get from '../get';
import sortLike from '../sortLike';

let items = [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'},
    {id: 3, name: 'C'}
];

test(`sortLike() should work if keys are the same as input`, () => {
    expect(sortLike([1,2,3], ii => ii.id)(items)).toEqual([
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
        {id: 3, name: 'C'}
    ]);
});

test(`sortLike() should work if keys are redordered from input`, () => {
    expect(sortLike([3,2,1], ii => ii.id)(items)).toEqual([
        {id: 3, name: 'C'},
        {id: 2, name: 'B'},
        {id: 1, name: 'A'}
    ]);
});

test(`sortLike() should work if keys are trimmed from input`, () => {
    expect(sortLike([2,1], ii => ii.id)(items)).toEqual([
        {id: 2, name: 'B'},
        {id: 1, name: 'A'}
    ]);
});

test(`sortLike() should skip where keys dont exist`, () => {
    expect(sortLike([1,4,5,3], ii => ii.id)(items)).toEqual([
        {id: 1, name: 'A'},
        {id: 3, name: 'C'}
    ]);
});


test(`sortLike() should create undefined where keys dont exist if unmatchedIds = true`, () => {
    expect(sortLike([1,4,5,3], ii => ii.id, true)(items)).toEqual([
        {id: 1, name: 'A'},
        undefined,
        undefined,
        {id: 3, name: 'C'}
    ]);
});

test(`sortLike() should output item more than once if keyed more than once`, () => {
    expect(sortLike([1,1,1], ii => ii.id)(items)).toEqual([
        {id: 1, name: 'A'},
        {id: 1, name: 'A'},
        {id: 1, name: 'A'}
    ]);
});

test(`sortLike() should output unmatched if instructed`, () => {
    expect(sortLike([3], ii => ii.id, false, true)(items)).toEqual([
        {id: 3, name: 'C'},
        {id: 1, name: 'A'},
        {id: 2, name: 'B'}
    ]);
});

test(`sortLike() should output unmatched and create undefined where keys dont exist`, () => {
    expect(sortLike([1,3,4,5], ii => ii.id, true, true)(items)).toEqual([
        {id: 1, name: 'A'},
        {id: 3, name: 'C'},
        undefined,
        undefined,
        {id: 2, name: 'B'}
    ]);
});

