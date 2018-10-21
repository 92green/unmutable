// @flow
import rotate from '../rotate';
import {fromJS} from 'immutable';

test(`rotate() on array should work`, () => {
    expect(rotate(0)([0,1,2,3])).toEqual([0,1,2,3]);
    expect(rotate(1)([0,1,2,3])).toEqual([1,2,3,0]);
    expect(rotate(3)([0,1,2,3])).toEqual([3,0,1,2]);
    expect(rotate(4)([0,1,2,3])).toEqual([0,1,2,3]);
    expect(rotate(-1)([0,1,2,3])).toEqual([3,0,1,2]);
});

test(`rotate() on List should work`, () => {
    expect(rotate(0)(fromJS([0,1,2,3])).toJS()).toEqual([0,1,2,3]);
    expect(rotate(1)(fromJS([0,1,2,3])).toJS()).toEqual([1,2,3,0]);
    expect(rotate(3)(fromJS([0,1,2,3])).toJS()).toEqual([3,0,1,2]);
    expect(rotate(4)(fromJS([0,1,2,3])).toJS()).toEqual([0,1,2,3]);
    expect(rotate(-1)(fromJS([0,1,2,3])).toJS()).toEqual([3,0,1,2]);
});
