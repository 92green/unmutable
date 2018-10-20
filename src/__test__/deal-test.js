// @flow
import deal from '../deal';
import {fromJS} from 'immutable';

test(`deal() on object should deal`, () => {
    expect(deal(1)({a:1,b:2,c:3,d:4})).toEqual([
        {a:1,b:2,c:3,d:4}
    ]);

    expect(deal(2)({a:1,b:2,c:3,d:4})).toEqual([
        {a:1,c:3},
        {b:2,d:4}
    ]);

    expect(deal(3)({a:1,b:2,c:3,d:4})).toEqual([
        {a:1,d:4},
        {b:2},
        {c:3},
    ]);
});

test(`deal() on map should deal`, () => {
    expect(deal(2)(fromJS({a:1,b:2,c:3,d:4}))).toEqual([
        fromJS({a:1,c:3}),
        fromJS({b:2,d:4})
    ]);
});

test(`deal() on array should make deals`, () => {
    expect(deal(1)([1,2,3,4])).toEqual([
        [1,2,3,4]
    ]);

    expect(deal(2)([1,2,3,4])).toEqual([
        [1,3],
        [2,4]
    ]);

    expect(deal(3)([1,2,3,4])).toEqual([
        [1,4],
        [2],
        [3]
    ]);
});

test(`deal() on list should make deals`, () => {
    expect(deal(2)(fromJS([1,2,3,4]))).toEqual([
        fromJS([1,3]),
        fromJS([2,4])
    ]);
});
