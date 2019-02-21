// @flow
import move from '../move';
import {fromJS} from 'immutable';

test(`move() on array should work`, () => {
    expect(move(0,0)([0,1,2])).toEqual([0,1,2]);
    expect(move(0,1)([0,1,2])).toEqual([1,0,2]);
    expect(move(5,1)([0,1,2,3,4,5,6])).toEqual([0,5,1,2,3,4,6]);
    expect(move(-1,-1)([0,1,2,3,4])).toEqual([0,1,2,3,4]);
    expect(move(1,-2)([0,1,2,3,4])).toEqual([0,2,3,1,4]);
});

test(`move() on List should work`, () => {
    expect(move(0,0)(fromJS([0,1,2])).toJS()).toEqual([0,1,2]);
    expect(move(0,1)(fromJS([0,1,2])).toJS()).toEqual([1,0,2]);
    expect(move(5,1)(fromJS([0,1,2,3,4,5,6])).toJS()).toEqual([0,5,1,2,3,4,6]);
});
